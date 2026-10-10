# Self-assessment — IA#1

Submitted by: `24127044` — `Lê Nguyễn Quốc Học`

Total I claim: 98 / 100

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js:2-16` implements the specified calculation, rounding, empty-cart behavior, shipping threshold, and `RangeError` validation. Tests for the example, empty cart, threshold and error cases are in `test/cart.test.js:6-46`. |
| Tests | 20 | 20 | `npm test` passed all 8 tests, including the example, empty cart, free-shipping threshold, negative price and invalid quantities (`test/cart.test.js:6-46`). |
| Harness | 20 | 20 | `AGENTS.md:3-11` gives the stack, commands, project-specific scope and explicit “Never” rule; `package.json:5-8` defines test and lint commands; `.github/workflows/ci.yml:3-4,23-27` runs lint and tests on push and pull request. `npm test` and `npm run lint` passed locally; CI has run per the task owner. |
| Brief | 15 | 15 | `BRIEF.md:6-25` specifies allowed files, contract, error cases and no-dependencies constraint; acceptance criteria are at `BRIEF.md:27-31`. |
| AI-LOG.md | 15 | 13 | `AI-LOG.md:14-29` records the tool, task, implementation and harness changes, rejected dependencies, checks, and limitations. It notes that the latest CI updates had not been rerun when the log entry was written. |

## What I did not manage

The coding agent could not run npm test in its environment due to a spawn EPERM restriction. Although the tests were verified separately, I could not complete the entire validation process within the agent's environment.

## What I would do differently

I would document AI interactions and decisions immediately after each task instead of reconstructing them later.

I would also establish a clearer validation workflow from the beginning, using local tests and GitHub Actions CI to independently verify AI-generated code when the agent's environment has execution limitations.