import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment.prod";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  form_text:any = [];
  constructor(public fb:FormBuilder,public  el:ElementRef,public request:RequestService) { }
  ngOnInit(): void {
    window.scrollTo(0,0)
    this.getForm();

  }
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
  getForm(){
    this.request.getData(`${environment.http.get_form}`).subscribe((res:any) => {
      this.form_text = res;
    })
  }
  form = this.fb.group({
    firstname: '',
    phonenumber: ['', [Validators.required,Validators.pattern(/^[^A-Za-z]{1,}$/)]],
    email: ['',[Validators.required,Validators.pattern(/^[a-z,0-9,\.]+@[a-z]+\.+[a-z]{2,4}$/)]],
    product: '',
    comment: ['', Validators.required]
  })
  submit(){
    this.form.reset();
  }
}
