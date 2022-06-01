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
  }
  data: any[] = []
  getRequest(){
    this.request.getData(`${environment.http.get_project}`).subscribe((res: any)=>{
      this.data = res
    })
  }
}
