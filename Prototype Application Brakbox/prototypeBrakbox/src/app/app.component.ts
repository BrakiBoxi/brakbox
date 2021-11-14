import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prototypeBrakmar';
  afficherIntro = false;
  afficherEnigme = true;
  afficherAnnexes = false;
  afficherIndices = false;

}
