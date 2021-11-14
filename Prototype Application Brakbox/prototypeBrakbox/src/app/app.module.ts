import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuVuesComponent } from './menu-vues/menu-vues.component';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { VueIntroComponent } from './vue-intro/vue-intro.component';
import { VueEnigmeComponent } from './vue-enigme/vue-enigme.component';
import { VueAnnexesComponent } from './vue-annexes/vue-annexes.component';
import { VueIndicesComponent } from './vue-indices/vue-indices.component';
import { AffichageDocumentComponent } from './affichage-document/affichage-document.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuVuesComponent,
    MenuVerticalComponent,
    VueIntroComponent,
    VueEnigmeComponent,
    VueAnnexesComponent,
    VueIndicesComponent,
    AffichageDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
