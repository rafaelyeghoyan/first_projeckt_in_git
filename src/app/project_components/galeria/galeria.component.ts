import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bool_1:any = true;
  bool_2:any = false;
  i:any = 1;
  num:any = '01';
  click_next() {
    this.i++
    this.bool_1 = false;
    this.num = '0';
    if(this.i >= 5) {
      // this.i = 1;
      // this.bool_1 = false;
      this.bool_2= true;
    }
    this.num += this.i ;
  }

  click_prev() {
    this.i--;
    this.bool_2= false;
    this.num = '0';
    if(this.i <= 1) {
      // this.i = 0;
      this.bool_1 = true;
    }
    this.num += this.i;
  }

  data: any[] =[
    {
      id:1,
      src: 'assets/images/galleria/image19.png',
      alt: 'no image'
    },
    {
      id:2,
      src: 'assets/images/galleria/Rectangle23.png',
      alt: 'no image'
    },
    {
      id:3,
      src: 'assets/images/galleria/Rectangle24.png',
      alt: 'no image'
    },
    {
      id:4,
      src: 'assets/images/galleria/Rectangle25.png',
      alt: 'no image'
    },
    {
      id:5,
      src: 'assets/images/galleria/Rectangle26.png',
      alt: 'no image'
    },
    {
      id:6,
      src: 'assets/images/galleria/Rectangle27.png',
      alt: 'no image'
    },
    {
      id:7,
      src: 'assets/images/galleria/Rectangle28.png',
      alt: 'no image'
    },
    {
      id:8,
      src: 'assets/images/galleria/Rectangle29.png',
      alt: 'no image'
    },
    {
      id:9,
      src: 'assets/images/galleria/Rectangle30.png',
      alt: 'no image'
    },
    {
      id:10,
      src: 'assets/images/galleria/Rectangle31.png',
      alt: 'no image'
    }
  ]


}
