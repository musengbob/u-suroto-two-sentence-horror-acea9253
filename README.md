# u-suroto-two-sentence-horror-acea9253

[![make.fun · u-suroto-two-sentence-horror-acea9253](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/musengbob/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/musengbob/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)

A deterministic program that outputs exactly two sentences of original horror fiction. A little girl across the hall knocks every night at 3 a.m. to warn the narrator about the man in the closet — until the narrator opens the closet and finds drawings of himself sleeping, dated before he moved in. The twist lands in the second sentence: the warnings were never about a stranger at all.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

This writes the two-sentence story to `output/entry.txt` and validates it: the read-back must be byte-identical, the text must be non-empty, and it must contain exactly two sentences. The program is fully deterministic — no randomness, no network, no clock — so every run produces byte-identical output.
