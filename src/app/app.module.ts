import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './project_components/home/home.component';
import { GalleryComponent } from './project_components/gallery/gallery.component';
import { ProjectComponent } from './project_components/project/project.component';
import { InprojectComponent } from './project_components/inproject/inproject.component';
import { CertificateComponent } from './project_components/certificate/certificate.component';
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
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'inproject',
    component: InprojectComponent
  },
  {
    path: 'certificate',
    component: CertificateComponent
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
    HomeComponent,
    GalleryComponent,
    ProjectComponent,
    InprojectComponent,
    CertificateComponent,
    ContactsComponent,
    NotfoundComponent,
<<<<<<< HEAD
    HttpComponent,
    LowerUpperCasePipe
=======
    HttpComponent
    
    
    
>>>>>>> 2deb87026d2a48f06e054c063e1a57f4442186be
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
