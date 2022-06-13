import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  

const Routing: Routes = [
  {
    path: '',
    loadChildren: () => import('./project_components/home/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./project_components/home/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./project_components/gallery/gallery/gallery.module').then((m) => m.GalleryModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./project_components/project/project/project.module').then((m) => m.ProjectModule)
  },
  {
    path: 'project/:name',
    loadChildren: () => import('./project_components/inproject/inproject/inproject.module').then((m) => m.InprojectModule)
  },
  {
    path: 'certificate',
    loadChildren: () => import('./project_components/certificate/certificate/certificate.module').then((m) => m.CertificateModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./project_components/contacts/contacts/contacts.module').then((m) => m.ContactsModule)
  },
  {
    path: 'http',
    loadChildren: () => import('./project_components/http/http/http.module').then((m) => m.HttpModule)
  },
  {
    path: '**',
    loadChildren: () => import('./project_components/notfound/notfound/notfound.module').then((m) => m.NotfoundModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(Routing)],
  exports: [RouterModule]
})
export class AppRoutingModule { }