# Self-assessment — IA#1

Submitted by: `<student ID>` — `<full name>` (replace with your details before submission)

Total I claim: 98 / 100

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js:2-16` implements the specified calculation, rounding, empty-cart behavior, shipping threshold, and `RangeError` validation. Tests for the example, empty cart, threshold and error cases are in `test/cart.test.js:6-46`. |
| Tests | 20 | 20 | `npm test` passed all 8 tests, including the example, empty cart, free-shipping threshold, negative price and invalid quantities (`test/cart.test.js:6-46`). |
| Harness | 20 | 20 | `AGENTS.md:3-11` gives the stack, commands, project-specific scope and explicit “Never” rule; `package.json:5-8` defines test and lint commands; `.github/workflows/ci.yml:3-4,23-27` runs lint and tests on push and pull request. `npm test` and `npm run lint` passed locally; CI has run per the task owner. |
| Brief | 15 | 15 | `BRIEF.md:6-25` specifies allowed files, contract, error cases and no-dependencies constraint; acceptance criteria are at `BRIEF.md:27-31`. |
| AI-LOG.md | 15 | 13 | `AI-LOG.md:14-29` records the tool, task, implementation and harness changes, rejected dependencies, checks, and limitations. It notes that the latest CI updates had not been rerun when the log entry was written. |

## What I did not manage

The AI log says CI had not been rerun on the latest updates when it was written. Per the task owner's note, CI has run, though its latest run/commit evidence was not independently checked here. Replace the student ID and name placeholders before submission.

## What I would do differently

Record the relevant CI run or commit in `AI-LOG.md` when CI verifies the submitted changes, so the result can be checked against the submitted version.

## Verification performed for this assessment

- `npm test` — passed, 8 tests.
- `npm run lint` — passed.
- CI workflow configuration inspected. Per the task owner's note, CI has run; its latest run was not independently verified here.

**Total:** 30 + 20 + 20 + 15 + 13 = **98 / 100**. Make the total in the submission zip filename match this report. This is a self-assessment, not an instructor mark.

<!-- Replace placeholders and verify evidence against the exact submitted commit. -->

Student ID: `<student ID>`  
Full name: `<full name>`

## Submission reminder

Include this file at the root of the zip. Use `<StudentID>_98.zip` for an individual submission, or the required group naming format. See the rubric's honesty-adjustment section when calibrating the score.

## Self-assessment status

Draft pending student identity details.

## Report end

98 / 100

<!-- End -->

## Evidence note

The repository files cited above were inspected in the working tree for this assessment. Confirm that the same versions are in the submitted commit.