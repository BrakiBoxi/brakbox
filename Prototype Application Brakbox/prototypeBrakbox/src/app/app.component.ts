import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prototypeBrakbox';
  @Input() viewDisplayed : string = "intro";
  settingsOpen : boolean = false;
  constructor(){
  }
  ngOnInit(): void {
  }

  public setViewDisplayed(viewName : string) : void {
    this.viewDisplayed = viewName;
  }
  public initializeAventure() : void {

  }
  public startAventure() : void {

  }
  public endAventure() : void {
    
  }
  public openSettings() : void {
    this.settingsOpen = true;
  }
  public isSettingsOpen() : boolean {
    return this.settingsOpen;
  }
}
