# @algosail/boolean# @algosail/boolean

`clamp(true)(true)(false)   // => true   (below lo, clamped to lo)clamp(false)(true)(true)   // => true   (already in range)clamp(false)(true)(false)  // => false  (already in range)`jsClamps a value between `lo` and `hi`.`clamp :: Boolean -> Boolean -> Boolean -> Boolean`### clamp---`max(true)(true)    // => truemax(true)(false)   // => truemin(false)(false)  // => falsemin(true)(false)   // => false`jsReturns the smaller or larger of two booleans.`max :: Boolean -> Boolean -> Booleanmin :: Boolean -> Boolean -> Boolean`### min / max---`gt(false)(true)    // => falsegt(true)(false)    // => truegte(false)(false)  // => truegte(true)(false)   // => truelt(true)(true)     // => falselt(false)(true)    // => truelte(true)(true)    // => true  (wait, this isn't exported — only lte)lte(true)(false)   // => falselte(false)(true)   // => truelte(false)(false)  // => true`jsTotal ordering where `false < true`.`gt  :: Boolean -> Boolean -> Booleangte :: Boolean -> Boolean -> Booleanlt  :: Boolean -> Boolean -> Booleanlte :: Boolean -> Boolean -> Boolean`### lte / lt / gte / gt---`equals(true)(1)      // => false  — 1 is not a booleanequals(true)(false)  // => falseequals(false)(false) // => trueequals(true)(true)   // => true`jsTrue only when both values are boolean primitives with the same value.`equals :: Boolean -> Boolean -> Boolean`### equals---`isBool(null)   // => falseisBool('true') // => falseisBool(1)      // => falseisBool(false)  // => trueisBool(true)   // => true`jsReturns `true` when the value is a boolean primitive (not just truthy/falsy).`isBool :: a -> Boolean`### isBool---- [clamp](#clamp)- [min / max](#min--max)- [lte / lt / gte / gt](#lte--lt--gte--gt)- [equals](#equals)- [isBool](#isbool)## ContentsBoolean comparison and ordering utilities. Ordering: `false < true`.
Boolean comparison functions with total ordering (`false < true`).

## Contents

- [isBool](#isbool)
- [equals](#equals)
- [lte / lt / gte / gt](#lte--lt--gte--gt)
- [min / max](#min--max)
- [clamp](#clamp)

---

### isBool

```
isBool :: a -> Boolean
```

Returns `true` only for boolean primitives (`true` or `false`).

```js
isBool(true) // => true
isBool(false) // => true
isBool(1) // => false
isBool('true') // => false
isBool(null) // => false
```

---

### equals

```
equals :: Boolean -> Boolean -> Boolean
```

True only when both values are booleans with the same value.

```js
equals(true)(true) // => true
equals(false)(false) // => true
equals(true)(false) // => false
equals(true)(1) // => false  — 1 is not a boolean
```

---

### lte / lt / gte / gt

```
lte :: Boolean -> Boolean -> Boolean
lt  :: Boolean -> Boolean -> Boolean
gte :: Boolean -> Boolean -> Boolean
gt  :: Boolean -> Boolean -> Boolean
```

Ordering with `false < true`.

```js
lte(false)(false) // => true
lte(false)(true) // => true
lte(true)(false) // => false

lt(false)(true) // => true
lt(true)(true) // => false

gte(true)(false) // => true
gt(true)(false) // => true
gt(false)(false) // => false
```

---

### min / max

```
min :: Boolean -> Boolean -> Boolean
max :: Boolean -> Boolean -> Boolean
```

Return the smaller or larger of two booleans.

```js
min(true)(false) // => false
min(false)(false) // => false
max(true)(false) // => true
max(false)(false) // => false
```

---

### clamp

```
clamp :: Boolean -> Boolean -> Boolean -> Boolean
```

Clamps a value between `lo` and `hi`.

```js
clamp(false)(true)(false) // => false
clamp(false)(true)(true) // => true
// With identical bounds:
clamp(true)(true)(false) // => true
clamp(false)(false)(true) // => false
```
