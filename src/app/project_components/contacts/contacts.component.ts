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
  save(){}
  close() {
    // @ts-ignore
    document.querySelector('.main').style.display = 'none';
  }
}
