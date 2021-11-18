import { Module } from "./Module";

export class Indice extends Module {
    private id : number;
    private locked : boolean = true;
    ////////////////////
    
    constructor(titre : string, id : number) {
        super(titre);
        this.id = id;
    }
    
    public getId() : number {
        return this.id;
    }
    public isLocked() : boolean {
        return this.locked;
    }

    public unlocked() : void {
        this.locked = true;
    }
}