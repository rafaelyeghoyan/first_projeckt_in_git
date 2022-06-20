import { Component, ElementRef, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment.prod';
import { Header } from './header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public request: RequestService, public el: ElementRef) { }

  ngOnInit(): void {
    this.getRequest();
    this.getimg();
  }
  

  data: any = [];
  header_logo: any = [];

  getRequest(){
    this.request.getData(`${environment.http.get_header}`).subscribe((res: Header ) => {
      this.data = res;
      // console.log(res)
    })
  }
  getimg(){
    this.request.getData(`${environment.http.get_header_logo}`).subscribe((res: any ) => {
      this.header_logo = res;
    })
  }
  click_on(){
    this.el.nativeElement.querySelector("#menu_click").style.display="inline-block";
  }
  click_off(){
    this.el.nativeElement.querySelector("#menu_click").style.display="none";
  }

}
