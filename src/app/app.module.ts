import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlavnayaComponent } from './project_components/glavnaya/glavnaya.component';
import { GaleriaComponent } from './project_components/galeria/galeria.component';
import { ProektsComponent } from './project_components/proekts/proekts.component';
import { InproektsComponent } from './project_components/inproekts/inproekts.component';
import { SercevikatiComponent } from './project_components/sercevikati/sercevikati.component';
import { ContactsComponent } from './project_components/contacts/contacts.component';
import { NotfoundComponent } from './project_components/notfound/notfound.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HttpComponent } from './project_components/http/http.component';
import { LowerUpperCasePipe } from './pipes/lower-upper-case.pipe';

const Routing: Routes = [
  {
    path: '',
    component: GlavnayaComponent
  },
  {
    path: 'glavnaya',
    component: GlavnayaComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'proekts',
    component: ProektsComponent
  },
  {
    path: 'inproecks',
    component: InproektsComponent
  },
  {
    path: 'sercevikati',
    component: SercevikatiComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'http',
    component: HttpComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    GlavnayaComponent,
    GaleriaComponent,
    ProektsComponent,
    InproektsComponent,
    SercevikatiComponent,
    ContactsComponent,
    NotfoundComponent,
    HttpComponent,
    LowerUpperCasePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routing),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
