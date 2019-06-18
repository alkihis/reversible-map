export default class ReversibleMap<K1, K2> {
    protected data: Map<K1 | K2, K1 | K2>;
    constructor(it?: Iterable<[K1 | K2, K1 | K2]>);
    get(k: K1 | K2): K1 | K2;
    set(k: K1 | K2, v: K1 | K2): void;
    has(k: K1 | K2): boolean;
    delete(k: K1 | K2): void;
    entries(): IterableIterator<[K1 | K2, K1 | K2]>;
    keys(): IterableIterator<K1 | K2>;
    keysUnique(): IterableIterator<K1 | K2>;
    values(): IterableIterator<K1 | K2>;
    [Symbol.iterator](): IterableIterator<[K1 | K2, K1 | K2]>;
    readonly size: number;
    readonly count: number;
}
