import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { HttpComponent } from '../http.component';


@NgModule({
  declarations: [HttpComponent],
  imports: [
    CommonModule,
    HttpRoutingModule,
    SharedModule
  ]
})
export class HttpModule { }
