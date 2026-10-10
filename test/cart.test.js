import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// Contract tests for cartTotal.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('an empty cart returns zero without tax or shipping', () => {
  assert.equal(cartTotal([], { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }), 0)
})

test('free shipping applies when subtotal equals the threshold', () => {
  const items = [{ name: 'Item', price: 100, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 100, shipFee: 30 }
  assert.equal(cartTotal(items, options), 100)
})

test('rounds the final total to the nearest whole đồng', () => {
  const items = [{ name: 'Item', price: 10, qty: 1 }]
  const options = { vatRate: 0.055, freeShipFrom: 10, shipFee: 0 }
  assert.equal(cartTotal(items, options), 11)
})

test('throws RangeError for a negative price', () => {
  const items = [{ name: 'Item', price: -1, qty: 1 }]
  assert.throws(() => cartTotal(items, {}), RangeError)
})

test('throws RangeError for a zero quantity', () => {
  assert.throws(() => cartTotal([{ name: 'Item', price: 10, qty: 0 }], {}), RangeError)
})

test('throws RangeError for a negative quantity', () => {
  assert.throws(() => cartTotal([{ name: 'Item', price: 10, qty: -1 }], {}), RangeError)
})

test('throws RangeError for a fractional quantity', () => {
  assert.throws(() => cartTotal([{ name: 'Item', price: 10, qty: 1.5 }], {}), RangeError)
})
