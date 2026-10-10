# AI Usage Log

Briefly record what actually happened each time AI is used. Do not include sensitive information; there is no need to copy the full conversation. You may also record work completed without AI.

## Log

### 2026-10-10 — Create project rules and brief for `cartTotal`
- **Tool:** DeepSeek Harness.
- **Asked for:** Create `AGENTS.md`, `BRIEF.md`, and `AI-LOG.md` based on the project structure and specification.
- **Changed:** Created `AGENTS.md` with stack, coding style, testing, and scope rules; created `BRIEF.md` with the contract, constraints, and acceptance criteria; initialized this log.
- **Not used:** No implementation suggestions or code were generated or used for this task.
- **Verification:** Tests were not run; only documentation was created, with no changes to program behavior.

### 2026-10-10 — Implement `cartTotal`
- **Tool:** DeepSeek Harness.
- **Asked for:** Implement `cartTotal(items, options)` according to `BRIEF.md`, inspect the diff, and validate normal and edge cases without changing the project documentation.
- **Changed:** Implemented subtotal, VAT, shipping-threshold handling, rounding, and the specified `RangeError` checks in `src/cart.js`. Added contract tests in `test/cart.test.js` for an empty cart, shipping threshold equality, rounding, negative price, and invalid quantities.
- **Not used:** No dependencies or unrelated project changes were added.
- **Verification:** `node --test --test-isolation=none` passed all 6 tests. `npm test` was attempted but the runner failed with `spawn EPERM` before executing test assertions. The diff review confirmed only `src/cart.js` and `test/cart.test.js` changed.
- **Problems:** Git initially rejected diff inspection due to dubious repository ownership; retried with a command-scoped `safe.directory` setting without changing global Git configuration.

### 2026-10-10 — Improve tests and CI harness
- **Tool:** DeepSeek Harness.
- **Asked for:** Address review feedback by splitting quantity validation into independent tests, adding a dependency-free lint gate, integrating it into CI, and improving the evidence record.
- **Produced:** Added `scripts/lint.js`, which checks tabs, trailing whitespace, two-space indentation, and semicolons in the implementation, tests, and lint script. Added the `lint` npm script, added lint to `.github/workflows/ci.yml`, updated `AGENTS.md`, and split the quantity test into separate zero, negative, and fractional cases in `test/cart.test.js`.
- **Human changes/review:** No manual code edits or independent human verification were reported in this request; the repository owner supplied the claim that GitHub Actions run #1 passed on commit `412592c`. This result predates the current lint/test updates and was not independently verified here.
- **Rejected/not used:** Did not add ESLint/Prettier or dependencies, consistent with the project's no-dependency constraint. Did not claim the earlier CI run proves the current changes pass.
- **Verification:** `npm run lint` passed for the configured three JavaScript files. `node --test --test-isolation=none` passed all 8 tests. `npm test` was attempted again but failed with `spawn EPERM` before assertions ran in this environment. CI has not been rerun on these changes.
- **Limitations:** The lint script is a small project-specific style checker, not a full JavaScript parser/linter. The reported GitHub Actions success applies only to the earlier commit unless a new run verifies the current changes.
