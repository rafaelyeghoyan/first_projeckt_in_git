import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  form = this.fb.group({
    tellnmber:['',[Validators.required,Validators.pattern(/^(0-9)/gm)]],
    username:['',[Validators.required, Validators.pattern(/^[a-z][^0-9]$/gm)]],
    email:['',[Validators.required,Validators.pattern(/^[a-z]@[a-z]{1,7}\.[a-z]{2,4}$/gmi)]],
    sms: ['',[Validators.required,]],
    secur:['',[Validators.required,]]
  })
  constructor(public fb:FormBuilder,public  el:ElementRef) { }
  ngOnInit(): void {
  }

  submit(){}
  save(){}
  openForm(){
    this.el.nativeElement.querySelector('.hidden_block').style.display= 'block';
    this.el.nativeElement.querySelector('.form_block').style.display= 'block';
  }
  buttonSend(){
    this.el.nativeElement.querySelector('.form_block').style.display= 'none';
    this.el.nativeElement.querySelector('.thanks_block').style.display = 'block';
    this.form.reset()
  }
  goPrevButton(){
    this.el.nativeElement.querySelector('.hidden_block').style.display= 'none';
    this.el.nativeElement.querySelector('.thanks_block').style.display = 'none';
  }
}
