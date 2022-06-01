import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment.prod';

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

  data: any[] =[]

  getRequest(){
    this.request.getData(`${environment.http.get_gallery}`).subscribe((res: any) => {
      this.data = res;
    })
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
      this.bool_2= true;
    }
    this.num += this.i ;
  }
  click_prev() {
    this.i--;
    this.bool_2= false;
    this.num = '0';
    if(this.i <= 1) {
      this.bool_1 = true;
    }
    this.num += this.i;
  }
}
