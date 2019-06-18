"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReversibleMap {
    constructor(it) {
        this.data = new Map;
        if (it) {
            for (const [k, l] of it) {
                this.set(k, l);
            }
        }
    }
    get(k) {
        return this.data.get(k);
    }
    set(k, v) {
        if (this.has(k)) {
            this.data.delete(this.get(k));
        }
        if (this.has(v)) {
            this.data.delete(this.get(v));
        }
        this.data.set(k, v);
        this.data.set(v, k);
    }
    has(k) {
        return this.data.has(k);
    }
    delete(k) {
        const linked = this.get(k);
        if (linked) {
            this.data.delete(k);
            this.data.delete(linked);
        }
    }
    *entries() {
        // Enregistre les clés déjà visités
        const keys = new Set();
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
    keys() {
        return this.data.keys();
    }
    *keysUnique() {
        for (const [key1,] of this.entries()) {
            yield key1;
        }
    }
    values() {
        return this.data.values();
    }
    *[Symbol.iterator]() {
        yield* this.entries();
    }
    get size() {
        return this.data.size;
    }
    get count() {
        return [...this.keysUnique()].length;
    }
}
exports.default = ReversibleMap;
