---
title: Adding an LLM feature without letting it break the product
summary: How I added AI-written series recaps to Courtside GM, kept the game working when the model call fails, and found a bug where thinking used up the whole token budget.
tags: [AI, Side projects, Next.js]
draft: true
---

[Courtside GM](https://courtsidegm.com) is a draft game I built: you bid blind against a CPU general manager for all-time NBA players, build a five-man lineup, and then a seven-game series plays out. At the end, the game writes a short recap of the series.

The first version of that recap was a template. It picked out the winner's two best players, checked for a sweep or a comeback, called out anyone playing badly out of position, and filled those facts into fixed sentences. It was accurate, but after a few games every recap sounded the same.

So I had an LLM write it instead. The interesting parts weren't the prompt. They were everything around it.

## Send facts, not prompts

The obvious approach is to have the browser send a prompt to an API route that forwards it to the model. That turns your endpoint into a free, public LLM proxy for anyone who finds it.

Instead, the browser sends only what the game actually produced: player IDs for each roster slot and the score of each game. The server:

1. Looks every player up in its own dataset and rejects unknown IDs.
2. Rebuilds the series and checks that it's a real best-of-seven: no ties, and no games after one side reached four wins.
3. Builds a structured set of facts (rosters, positional penalties, game-by-game scores, whether the winner came from behind) and sends those to the model.

No free text from the client ever reaches the prompt, so there's nothing to inject and nothing to abuse.

## The template is the fallback, not the dead code

I kept the template recap. The page shows it whenever the AI recap isn't available: no API key configured, the call fails, or it takes longer than 12 seconds. A recap is a nice-to-have. It should never be the reason the results page breaks.

AI recaps get a small "AI" badge, so I can tell at a glance which path ran.

## Make failures say why

The first time I deployed this, every game fell back to the template, and I had no idea why. The route returned a generic 502.

So I gave every failure a reason code: `not_configured`, `invalid_api_key`, `no_credits`, `model_not_found`, `timeout`. The route logs it on the server and the page logs it in the browser console. I also added a `GET` on the same route that reports whether a key is configured and looks like the right kind of key, without revealing it.

That turned guesswork into two quick checks. The first: the account had no API credit yet. The second was more interesting.

## The bug: thinking ate the token budget

After adding credit, the recap still fell back. The new reason code said `empty_response:max_tokens:thinking`.

The model had extended thinking on by default, and thinking tokens count against `max_tokens`. I had capped the response at 400 tokens because a recap is a paragraph long. The model spent all 400 thinking and stopped before writing a single word of the recap.

The fix was one line: turn thinking off for this call, since a five-sentence recap doesn't need it, and give the output a little more room.

## What I'd take from this

- Treat the model as an unreliable dependency, the same as any third-party API. Design the fallback first.
- Never forward client text into a prompt when you can send validated, structured facts instead.
- Spend ten minutes on failure reasons up front. They pay for themselves the first time something goes wrong in production.
- Know how your model's token budget is actually spent. "Max tokens" isn't the same as "max output words" once thinking is involved.
