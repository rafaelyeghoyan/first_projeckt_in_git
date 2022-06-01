import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-inproject',
  templateUrl: './inproject.component.html',
  styleUrls: ['./inproject.component.css']
})
export class InprojectComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.getRequest()
  }
  data: any[] = [];
  getRequest(){
    this.request.getData(`${environment.http.get_inproject}`).subscribe((res: any)=>{
      this.data = res;
    })
  }
}
