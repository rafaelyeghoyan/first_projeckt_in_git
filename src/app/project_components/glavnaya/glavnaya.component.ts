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
  bool_1:any = true;
  bool_2:any = false;
  i:any = 0;
  num:any = '01';
  click_next() {
    this.i++
    if(this.i == 1) {
      this.i = 0;
      this.bool_1 = false;
      this.bool_2= true;
    }   
    this.num = '02';
  }

  click_prev() {
    this.i--
    if(this.i == -1) {
      this.i = 0;
      this.bool_1 = true;
      this.bool_2= false;
    }  
    this.num = '01' 
  }
}
