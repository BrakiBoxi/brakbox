import { DocumentBDD } from "./DocumentBDD";

export class Introduction {
    private titre : string;
    private numberOfDocs : number = 0;
    private documents = new Map();
    /////////////////
    constructor(titre: string) {
        this.titre = titre;
        
    }

    public getNumberOfDocs() : number {
        return this.numberOfDocs;
    }

    public setDoc(d : DocumentBDD) : void {
        this.documents.set(d.getId(), d.getContenu());
    }
}