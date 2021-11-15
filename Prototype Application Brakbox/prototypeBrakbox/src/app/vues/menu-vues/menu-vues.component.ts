import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-vues',
  templateUrl: './menu-vues.component.html',
  styleUrls: ['./menu-vues.component.css']
})
export class MenuVuesComponent implements OnInit {
  
  navButtons : Array<string> = ["indice", "intro", "enigme", "annexes"];
  viewDisplayed : string = "intro";
  @Output() event: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  changeViewVisibility(viewName : string) {
    this.viewDisplayed = viewName;
    console.log(viewName);
    //envoie valeure au composant parent
    this.sendChildToParents();

  }
  //changement de vue en utilisant les flèches
  moveWithArrow(direction : string) {
    this.permutationButtons(direction);
    this.viewDisplayed = this.navButtons[2];
    this.sendChildToParents();
  }
  //permutation des boutons de navigations selon le sens de la flèche
  permutationButtons(direction : string) {
    var name : string = "";
    var firstButton : string = "";
    var lastButton : string = "";

    if(direction === "left"){

      firstButton = this.navButtons[0];
      for(let i = 1; i < this.navButtons.length; i++) {
        this.navButtons[i - 1] = this.navButtons[i];
      }
      this.navButtons[this.navButtons.length - 1] = firstButton;
    } else {

      lastButton = this.navButtons[this.navButtons.length - 1];
      for(let i = this.navButtons.length - 2; i > -1; i--) {
        this.navButtons[i+1] = this.navButtons[i];
      }
      this.navButtons[0] = lastButton;

    }
  }
  sendChildToParents() {
    this.event.emit(this.viewDisplayed);
  }
}
