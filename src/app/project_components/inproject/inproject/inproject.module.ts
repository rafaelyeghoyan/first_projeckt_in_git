import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InprojectRoutingModule } from './inproject-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { InprojectComponent } from '../inproject.component';


@NgModule({
  declarations: [InprojectComponent],
  imports: [
    CommonModule,
    InprojectRoutingModule,
    SharedModule
  ]
})
export class InprojectModule { }
