export default class ReversibleMap<K1, K2> {
    protected data: Map<K1|K2, K1|K2> = new Map;

    constructor(it?: Iterable<[K1 | K2, K1 | K2]>) {
        if (it) {
            for (const [k, l] of it) {
                this.set(k, l);
            }
        }
    }

    get(k: K1 | K2) : K1 | K2 {
        return this.data.get(k);
    }

    set(k: K1 | K2, v: K1 | K2) {
        this.data.set(k, v);
        this.data.set(v, k);
    }

    has(k: K1 | K2) {
        return this.data.has(k);
    }

    delete(k: K1 | K2) {
        const linked = this.get(k);

        if (linked) {
            this.data.delete(k);
            this.data.delete(linked);
        }
    }

    *entries() : IterableIterator<[K1 | K2, K1 | K2]> {
        // Enregistre les clés déjà visités
        const keys = new Set<K1 | K2>();
        
        for (const [key1, key2] of this.data.entries()) {
            if (keys.has(key1)) {
                continue;
            }

            // On a pas visité ce couple
            // On ajoute la clé deux pour pas retomber sur elle
            keys.add(key2);

            yield [key1, key2];
        }
    }

    keys() : IterableIterator<K1 | K2> {
        return this.data.keys();
    }

    *keysUnique() : IterableIterator<K1 | K2> {
        for (const [key1, ] of this.entries()) {
            yield key1;
        }
    }

    *values() : IterableIterator<K1 | K2> {
        yield* this.keys();
    }

    *[Symbol.iterator]() : IterableIterator<[K1 | K2, K1 | K2]> {
        yield* this.entries();
    }

    get size() {
        return this.data.size;
    }

    get count() {
        return [...this.keysUnique()].length;
    }
}