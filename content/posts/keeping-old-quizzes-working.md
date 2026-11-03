---
title: Keeping old quizzes working when the content under them changes
summary: Shared content changes every release, and quizzes built on last month's version were quietly breaking. Version pinning fixed it, and launching it taught me a lesson about object lifecycles.
tags: [Backend, Java, Reliability]
draft: true
---

On the learning platform I work on, quizzes aren't stored as finished documents. A quiz records which questions it uses, and the questions are generated from shared content files that curriculum teams edit all the time: new answer options, reworded prompts, reordered rows.

That's great for keeping content fresh, and bad for anything that has to reproduce exactly what a student saw weeks ago. When a quiz was replayed or scored after a content release, it could pick up the new version of a file instead of the one it was built with. Early on, a single release could break hundreds of quizzes, and teams spent real effort each release preventing breakage by hand.

## The idea: pin each quiz to the versions it was built with

The fix is simple to state: when a quiz is created, record the exact version of every content file it depends on, and always read those versions back when the quiz is replayed or scored. New quizzes get new content. Old quizzes keep the content they were made with.

Getting there took a few pieces:

- **Versions worth pinning.** Not every edit is a new version. Content files get touched for formatting and metadata all the time, so versions are keyed on a hash of only the columns that change what a student sees. A whitespace fix doesn't create a new version.
- **A release step that archives versions.** At the end of each content release, a versioning step records the new versions and flags breaking changes before they ship. I worked with the curriculum teams to add it to their release run book.
- **Every scoring path.** Quizzes can be scored four different ways, and each one reads content through its own path. Pinning only works if every one of them honors the pin, and one that didn't was the source of a bug we later fixed.
- **A baseline for quizzes that predate the feature.** Quizzes created before launch had no pins at all. On launch day we archived every content file once, and a quiz with no pin resolves to that baseline instead of whatever is current.

Today that covers 100,000+ quizzes, and content changes no longer break them.

## The launch lesson: who owns the object?

Shortly after launch we had a production incident: servers running out of memory.

The cause was a cache that should have existed once per server but was being created once per question on the new code path. Each instance quietly started its own background thread for logging cache statistics. One cache per question meant one thread per question, and threads aren't free. Memory climbed until the servers fell over.

The fix was to pull the versioning logic into its own service, bound once per server in the dependency injection setup, and make sure nothing constructs the cache directly.

What I took from it:

- **Object lifecycle is part of the design.** "How many of these exist?" deserves the same scrutiny as "what does this do?", especially for anything that owns threads, connections, or caches.
- **Side effects in constructors are a trap.** A class that starts a thread when it's created turns an innocent `new` into a resource leak.
- **Ship big changes with a way to see their footprint.** Thread counts and memory per server are cheap to watch, and they would have shown this before it became an incident.
