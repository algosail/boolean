// boolean.js – Plain boolean comparison functions.
// Ordering: false < true

/**
 * isBool :: a -> Boolean
 * Returns true when a is a boolean primitive.
 * @example isBool(true) // => true
 */
export const isBool = (a) => typeof a === 'boolean'

/**
 * equals :: Boolean -> Boolean -> Boolean
 * True only when both are booleans with the same value.
 * @example equals(true)(true) // => true
 */
export const equals = (a) => (b) => isBool(a) && isBool(b) && a === b

/**
 * lte :: Boolean -> Boolean -> Boolean
 * false <= false, false <= true, NOT true <= false.
 * @example lte(false)(true) // => true
 */
export const lte = (a) => (b) =>
  (a === false && b === false) || (a === false && b === true)

/**
 * lt :: Boolean -> Boolean -> Boolean
 * Strict less-than.
 * @example lt(false)(true) // => true
 */
export const lt = (a) => (b) => lte(a)(b) && !lte(b)(a)

/**
 * gte :: Boolean -> Boolean -> Boolean
 * Greater-than-or-equal.
 * @example gte(true)(false) // => true
 */
export const gte = (a) => (b) => lte(b)(a)

/**
 * gt :: Boolean -> Boolean -> Boolean
 * Strict greater-than.
 * @example gt(true)(false) // => true
 */
export const gt = (a) => (b) => lte(b)(a) && !lte(a)(b)

/**
 * min :: Boolean -> Boolean -> Boolean
 * Returns the smaller of the two booleans.
 * @example min(true)(false) // => false
 */
export const min = (a) => (b) => (lte(a)(b) ? a : b)

/**
 * max :: Boolean -> Boolean -> Boolean
 * Returns the larger of the two booleans.
 * @example max(true)(false) // => true
 */
export const max = (a) => (b) => (lte(b)(a) ? a : b)

/**
 * clamp :: Boolean -> Boolean -> Boolean -> Boolean
 * Clamps a value between lo and hi.
 * @example clamp(false)(true)(false) // => false
 */
export const clamp = (lo) => (hi) => (x) =>
  lte(x)(lo) ? lo : lte(hi)(x) ? hi : x
