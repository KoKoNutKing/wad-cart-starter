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
