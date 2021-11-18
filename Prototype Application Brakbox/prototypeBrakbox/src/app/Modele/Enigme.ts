import { Indice } from "./Indice";
import { Module } from "./Module";

export class Enigme extends Module {
    private id : number;
    private indices = new Map();

    ///////////////////////

    constructor(titre : string, id : number) {
        super(titre);
        this.id = id;
    }

    public getId() : number {
        return this.id;
    }
    public addIndices(i : Indice) {
        this.indices.set(i.getId(), i);
    }
}