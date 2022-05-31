import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  form = this.fb.group({
    username:['',Validators.required],
    usertel:['',Validators.required],
    useremail:['',Validators.required],
    usercommit: ['',Validators.required]
  })
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  openBlock() {
  // @ts-ignore
    document.querySelector('.main').style.display = 'block';
  }
  close() {
    // @ts-ignore
    document.querySelector('.main').style.display = 'none';
    // @ts-ignore
    document.querySelector('form').style.display = 'block';
    // @ts-ignore
    document.querySelector('.thanks_block').style.display= 'none';
  }
  submit () {

  }
  openBlockn(){
    // @ts-ignore
    document.querySelector('.thanks_block').style.display= 'block';
    // @ts-ignore
    document.querySelector('form').style.display = 'none';
  }
}
