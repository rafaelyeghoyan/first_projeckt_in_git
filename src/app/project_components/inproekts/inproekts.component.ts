import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-inproekts',
  templateUrl: './inproekts.component.html',
  styleUrls: ['./inproekts.component.css']
})
export class InproektsComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.getRequest()
  }
  data: any[] = [];
  getRequest(){
    this.request.getData(`${environment.http.get_inproject}`).subscribe((res: any)=>{
        this.data = res;
    })
  }
}
