# reversible-map

> A `Map` extended call with support of reversing keys.

One `ReversibleMap` object consider the use of two values as keys.
You can access to a key data using the other key.

> This documentation will use TypeScript typing. Remove any type to restore "pure" JavaScript.

## Getting started

```ts
// With a standard Map
const classic_map = new Map<string, string>();
classic_map.set('classic', 'map');

// <type_key1, type_key2>
const reversible_map = new ReversibleMap<string, number>();
reversible_map.set('one', 2);

// Key order is not important
reversible_map.set(3, 'four');

reversible_map.get(3); // => 'four'
reversible_map.get('four'); // => 3
reversible_map.get(2); // => 'one'
```

Keys can be of any type (like in the `Map` object).

The number of keys allowed is unlimited and their order is not relevant.

To install the package, use:
```bah
$ npm install reversible-map
```


## Usage

Main methods are `get`, `set` and `has`.

### Instanciation
```ts
import ReversibleMap from 'reversible-map';

const map = new ReversibleMap<string, number>();
// You can instanciate with an entries array
const from_it = new ReversibleMap([ ['Hello', 3], ['value', 5] ]);
```

### Set values
```ts
map.set("one", 3);
map.set("four", 5);
map.set("six", 8);
// Setters are chainable
map.set("nine", 11).set("twelve", 14);
```

### Get values
```ts
map.get("one"); // => 3
map.get("four"); // => 5
map.get("six"); // => 8
```

### Iteration

Iteration through `.entries()`, `Symbol.iterator`, `.keysUnique()` ensure that getting a value with those methods will not give you duplicates.

`.keys()` give you all the keys, including the reverse of a key previously iterated.

```ts
/// Iterate through the map
const entries = Array.from(map.entries() /* map.entries() is a generator */);
// Using Symbol.iterator | .entries()
for (const [keys, value] of map) {
    // "one", 3
    // "four", 5
    // "six", 8
    // "ten", 11
    // "twelve", 14
}
```

### Appartenance
```ts
// Test if one key exists
map.has("one"); // => true
map.has("hello"); // => false
```

### Delete values
```ts
/// Delete values
map.delete("one"); // Deletions are also chainable.
```
