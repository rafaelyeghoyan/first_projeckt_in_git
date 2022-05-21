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
<<<<<<< HEAD
  openBlock() {
  // @ts-ignore
    document.querySelector('.main').style.display = 'block';
  }
  save(){}
  close() {
    // @ts-ignore
    document.querySelector('.main').style.display = 'none';
  }
=======

>>>>>>> c6a64fc4568016db976bf73e0435539cde26f94b
}
