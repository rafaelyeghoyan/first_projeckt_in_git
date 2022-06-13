import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { CertificateComponent } from '../certificate.component';


@NgModule({
  declarations: [CertificateComponent],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    SharedModule
  ]
})
export class CertificateModule { }
