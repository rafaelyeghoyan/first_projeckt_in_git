import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  submit (event:any) {
  event.preventDefault();
  }
  openBlockn(){
    // @ts-ignore
    document.querySelector('.thanks_block').style.display= 'block';
    // @ts-ignore
    document.querySelector('form').style.display = 'none';
  }
}
