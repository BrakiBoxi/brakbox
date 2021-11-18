
export abstract class Module {
    private titre : string;
    constructor(titre : string) {
        this.titre = titre;
    }

    public getTitre() : string {
        return this.titre;
    }
    abstract getId() : number;
} 