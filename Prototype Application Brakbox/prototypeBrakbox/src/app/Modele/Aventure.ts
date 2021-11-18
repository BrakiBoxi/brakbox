import { Introduction} from "./Introduction";
import { Annexe } from "./Annexe";
import { Enigme } from "./Enigme";


export class  Aventure {
    
    private static aventureInstance : Aventure = new Aventure();
    private intro : Introduction = new Introduction("vide");
    private enigmes : Array<Enigme> = new Array();
    private annexes : Array<Annexe> = new Array()

    constructor() {
        
    }
    //getters et setters
    public static getInstance() : Aventure {
        if(Aventure.aventureInstance == null) {
            Aventure.aventureInstance = new Aventure();
        }
        return Aventure.aventureInstance;
    }
    public getIntro() : Introduction {
        return this.intro;
    }
    public getEnigmes() {
        return this.enigmes;
    }
    public getAnnexes() {
        return this.annexes;
    }
    public setIntro(i : Introduction) : void {
        this.intro = i;
    }
    public addEnigme(e : Enigme) : void {
        this.enigmes.push(e);
    }
    public addAnnexes(a : Annexe) : void {
        this.annexes.push(a);
    }

    
}