import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.getRequest()
    this.getProject()
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
    this.getProject()
  }

  click_prev() {
    this.i--;
    this.bool_2= false;
    this.num = '0';
    if(this.i <= 1) {
      this.bool_1 = true;
    }
    this.num += this.i;
    this.getProject()
  }
  getProject(){
    let b = this.i;
    this.request.getData(`${environment.http.get_project}`).subscribe(res=> {
      let ar = this.data;
      let a = Object.assign(res);
      a.forEach(function (item:any,index:any,arr:any) {
        if((b - 1 ) == index){
          ar = arr[index];
          console.log(b,index)
        }
        console.log(arr.length)
      })
      this.data = ar;
    })
  }
  data: any[] = []
  getRequest(){
    this.request.getData(`${environment.http.get_project}`).subscribe((res: any)=>{
      this.data = res
    })
  }
}
