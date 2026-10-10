# Project Rules

- **Stack:** JavaScript ESM on Node.js; keep `"type": "module"`. Do not add dependencies.
- **Style:** Use single quotes and omit semicolons; use clear `camelCase` names and ESM `import`/`export`. Match the style of nearby files.
- **Checks:** Run `npm run lint` and `npm test` (currently `node --test`). The built-in lint script checks tabs, trailing whitespace, two-space indentation, and semicolons in `src/cart.js`, `test/cart.test.js`, and `scripts/lint.js`.
- **Testing:** When changing behavior, add or update tests in `test/`; run the relevant tests and `npm test`.
- **Scope:** Change only files needed for the assigned task. For the `cartTotal` brief, only modify `src/cart.js` and related tests in `test/`, if needed.
- **Restrictions:** Do not add packages or APIs, or change project structure without approval. Do not commit sensitive information.
- **Never:** Never add dependencies or modify files outside the task's explicitly allowed scope.
- **Reporting:** State which files were changed and which checks were actually run; do not claim tests passed unless they were run.
- **Specification priority:** If the BRIEF conflicts with the README, stop and ask before implementation.

.