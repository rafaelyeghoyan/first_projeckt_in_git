import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment.prod';
import { Gallery } from './gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getRequest();
  }

  data: Gallery [] = []
  
  bool_1:any = true;
  bool_2:any = false;
  i:any = 1;
  num:any = '01';
  num_end:any;
  click_next() {
    this.i++
    this.bool_1 = false;
    this.num = '0';
    if(this.i >= this.num_end) {
      this.bool_2= true;
    }
    this.num += this.i;
    this.getRequest();
  }
  click_prev() {
    this.i--;
    this.bool_2= false;
    this.num = '0';
    if(this.i <= 1) {
      this.bool_1 = true;
    }
    this.num += this.i;
    this.getRequest();
  }

  getRequest(){
      let ind = this.i;
      this.request.getData(`${environment.http.get_gallery}`).subscribe((res: any) => {
        this.num_end = res.length;
        if(this.num_end < 10){
          this.num_end = '0' + this.num_end;
        }
        let img = this.data;
        res.forEach(function (item:any, index:any, arr:any) {
          if((ind - 1 ) == index){
            img = arr[index];
          }
        })
        this.data = img;
      })
    }



}
