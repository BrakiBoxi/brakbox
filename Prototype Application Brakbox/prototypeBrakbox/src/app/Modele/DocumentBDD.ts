
export class DocumentBDD {
    private id : number;
    private contenu : string;
    /////////////////
    constructor(id : number, contenu : string) {
        this.id = id;
        this.contenu = contenu;
        
    }

    public getId() {
        return this.id;
    }
    public getContenu() {
        return this.contenu;
    }
}