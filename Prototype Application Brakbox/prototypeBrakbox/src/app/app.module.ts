import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuVuesComponent } from './vues/menu-vues/menu-vues.component';
import { MenuVerticalComponent } from './vues/menu-vertical/menu-vertical.component';
import { VueIntroComponent } from './vues/vue-intro/vue-intro.component';
import { VueEnigmeComponent } from './vues/vue-enigme/vue-enigme.component';
import { VueAnnexesComponent } from './vues/vue-annexes/vue-annexes.component';
import { VueIndicesComponent } from './vues/vue-indices/vue-indices.component';
import { AffichageDocumentComponent } from './vues/affichage-document/affichage-document.component';

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
