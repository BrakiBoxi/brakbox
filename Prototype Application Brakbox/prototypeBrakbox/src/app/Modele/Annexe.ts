import { Module } from "./Module";

export class Annexe extends Module {
    private id : number;
    ////////////////
    constructor(titre : string, id : number) {
        super(titre);
        this.id = id;
    }
    
    public getId() {
        return this.id;
    }
}