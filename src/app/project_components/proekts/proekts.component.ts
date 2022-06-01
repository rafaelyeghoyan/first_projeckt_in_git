import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-proekts',
  templateUrl: './proekts.component.html',
  styleUrls: ['./proekts.component.css']
})
export class ProektsComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.getRequest()
  }
  data: any[] = []
  getRequest(){
    this.request.getData(`${environment.http.get_project}`).subscribe((res: any)=>{
      this.data = res
    })
  }
}
