import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  form = this.fb.group({
    tellnmber:[''],
    username:[''],
    email:[''],
    sms: [''],
    secur:['']
  })
  constructor(public fb:FormBuilder,public  el:ElementRef) { }
  ngOnInit(): void { }

  openForm(){
    this.el.nativeElement.querySelector('.hidden_block').style.display= 'block';
    this.el.nativeElement.querySelector('.form_block').style.display= 'block';
  }
  buttonSend(){
    this.el.nativeElement.querySelector('.form_block').style.display= 'none';
    this.el.nativeElement.querySelector('.thanks_block').style.display = 'block';
    this.form.reset()
    console.log(this.form.invalid);
    console.log(this.form.valid);
  }
  goPrevButton(){
    this.el.nativeElement.querySelector('.hidden_block').style.display= 'none';
    this.el.nativeElement.querySelector('.thanks_block').style.display = 'none';
  }
}
