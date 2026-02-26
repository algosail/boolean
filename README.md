# @algosail/boolean

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
