import { Component, OnInit, Input } from '@angular/core';
import { Annexe } from 'src/app/Modele/Annexe';
import { Aventure } from 'src/app/Modele/Aventure';
import { Enigme } from 'src/app/Modele/Enigme';
import { Module } from 'src/app/Modele/Module';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.css']
})
export class MenuVerticalComponent implements OnInit {
  //test nav elements
  navElementAnnexes : Array<Module> = [new Annexe("carte", 1), new Annexe("boite", 2), new Annexe("marteau", 3)];
  navElementEngimes : Array<Module> = [new Enigme("Tableau de bord", 1), new Enigme("Couper l'autopilotage", 2), new Enigme("Problème de tuyauterie", 3)];
  navElement : Array<Module> = new Array();
  //test nav elements
  elementDisplayed : Module = new Enigme("vide", 0);
  @Input() viewDisplayed : string = "";

  constructor() {
    
    
  }

  ngOnInit(): void {
    //pas mal si l'envoie de données parent->enfant ne marche pas
    console.log(this.viewDisplayed);
    this.setNavElement();
  }

  public setNavElement() : void {
    if(this.viewDisplayed === "enigme") {
      //this.navElement = Aventure.getInstance().getEnigmes();
      this.navElement = this.navElementEngimes;
    } else if(this.viewDisplayed === "annexes") {
      //this.navElement = Aventure.getInstance().getEnigmes();
      this.navElement = this.navElementAnnexes;
    }
  }
  changeElementVisibility(e : Module) : void {
    this.elementDisplayed = e;
    console.log(e);
    
  }
  //changement de vue en utilisant les flèches
  moveWithArrow(direction : string) : void {
    this.permutationButtons(direction);
    this.elementDisplayed = this.navElement[2];

  }
  //permutation des boutons de navigations selon le sens de la flèche
  permutationButtons(direction : string) : void {
    var firstElement : Module;
    var lastElement : Module;

    if(direction === "left"){

      firstElement = this.navElement[0];
      for(let i = 1; i < this.navElement.length; i++) {
        this.navElement[i - 1] = this.navElement[i];
      }
      this.navElement[this.navElement.length - 1] = firstElement;
    } else {

      lastElement = this.navElement[this.navElement.length - 1];
      for(let i = this.navElement.length - 2; i > -1; i--) {
        this.navElement[i+1] = this.navElement[i];
      }
      this.navElement[0] = lastElement;

    }
  }
}
