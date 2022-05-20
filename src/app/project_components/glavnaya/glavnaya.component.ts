import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glavnaya',
  templateUrl: './glavnaya.component.html',
  styleUrls: ['./glavnaya.component.css']
})

export class GlavnayaComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
 i:any = 0;
  click_next() {
    this.i++
    if(this.i == 2) {
      this.i = 0;
    }   
    // console.log(this.i);
  }

  click_prev() {
    this.i--
    if(this.i == -1) {
      this.i = 1;
    }   
    // console.log(this.i);
  }
}
