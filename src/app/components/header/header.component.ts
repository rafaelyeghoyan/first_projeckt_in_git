import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.getRequest();
    this.getimg();
  }
  

  data: any [] = []
  header_logo: any  = []

  getRequest(){
    this.request.getData(`${environment.http.get_header}`).subscribe((res: any) => {
      this.data = res;
    })
  }
  getimg(){
    this.request.getData(`${environment.http.get_header_logo}`).subscribe((res: any) => {
      this.header_logo = res;
    })
  }


}
