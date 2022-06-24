import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment.prod';
import { Footer } from './footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.get_footer_menu();
    this.get_footer_logo();
    this.get_contact_footer();
    this.get_media_footer();
  }

  footer_menu: Footer[] = [];
  footer_logo: any = [];
  contact_footer: any = [];
  media_footer: Footer[] = [];



  get_footer_menu(){
    this.request.getData(`${environment.http.get_footer_menu}`).subscribe((res: any) => {
      this.footer_menu = res;
    })
  }
  get_footer_logo(){
    this.request.getData(`${environment.http.get_footer_logo}`).subscribe((res: any) => {
      this.footer_logo = res;
    })
  }
  get_contact_footer(){
    this.request.getData(`${environment.http.get_contact_footer}`).subscribe((res: any) => {
      this.contact_footer = res;
    })
  }
  get_media_footer(){
    this.request.getData(`${environment.http.get_media_footer}`).subscribe((res: any) => {
      this.media_footer = res;
    })
  }



}
