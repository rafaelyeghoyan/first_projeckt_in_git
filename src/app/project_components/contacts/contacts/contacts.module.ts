import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ContactsComponent } from '../contacts.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ContactsModule { }
