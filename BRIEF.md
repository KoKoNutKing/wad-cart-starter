# AI Task Brief — Implement `cartTotal`

## Objective
Implement `cartTotal(items, options)` in `src/cart.js` according to the project's existing specification.

## Scope
- Allowed: `src/cart.js`.
- `test/cart.test.js` may be modified only when needed to add or update tests that verify the specification; do not weaken or remove existing tests.
- Do not modify any other files.

## Contract
- `items`: an array of items shaped like `{ name, price, qty }`.
- `options`: `{ vatRate, freeShipFrom, shipFee }`.
- `subtotal` is the sum of `price × qty` for all items.
- VAT is `vatRate × subtotal`.
- Shipping is `0` when `subtotal >= freeShipFrom`; otherwise it is `shipFee`.
- Return a number equal to `subtotal + VAT + shipping`, rounded to the nearest whole đồng.
- An empty cart returns `0`, with no VAT or shipping charge.
- A negative `price` or a `qty` that is not a positive integer must throw `RangeError`.
- Example: subtotal `405000`, VAT `8%`, free-shipping threshold `500000`, and shipping fee `30000` result in a total of `467400`.

## Constraints
- Use JavaScript ESM on Node.js; do not add dependencies.
- Do not add APIs, change the project structure, or modify files outside the allowed scope.
- If an input case is not specified, do not expand the contract on your own; record it and ask the task owner.

## Acceptance Criteria
- `cartTotal` satisfies the full contract and the example above.
- Existing tests and any relevant added tests pass with `npm test`.
- The diff contains only changes necessary for this task and no out-of-scope changes.
- Report truthfully which checks were run and their results.

## Reference
The original specification is in `README.md`. If this brief conflicts with the README, stop and ask before implementation.
