import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InprojectComponent } from '../inproject.component';

const routes: Routes = [{
  path: '',
  component: InprojectComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InprojectRoutingModule { }
