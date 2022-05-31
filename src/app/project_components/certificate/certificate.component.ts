import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  data:any= [
    {
      "id": 1,
      "url": "assets/images/certificate/photo_2019-05-23_19-46-09.png"
    },
    {
      "id": 2,
      "url": "assets/images/certificate/photo_2019-05-23_19-46-10-800x1067.png"
    },
    {
      "id": 3,
      "url": "assets/images/certificate/photo_2019-05-23_19-46-11-800x1067.png"
    },
    {
      "id": 4,
      "url": "assets/images/certificate/photo_2019-05-23_19-46-09.png"
    }
  ];
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

  constructor(public request:RequestService) { }

  ngOnInit(): void {
  }

  getRequest(){
    this.request.getData(`${environment.http.certificateJsonUrl}`).subscribe(res=>{
    this.data = res;
    })
  }
}
