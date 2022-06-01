import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.getRequest();
    this.get_footer_logo();
    this.get_contact_footer();
    this.get_media_footer();
  }

  data: any [] = []
  footerLogo: any = []
  contact_footer: any = []
  media_footer: any[] = []



  getRequest(){
    this.request.getData(`${environment.http.get_footer}`).subscribe((res: any) => {
      this.data = res;
    })
  }
  get_footer_logo(){
    this.request.getData(`${environment.http.get_footer_logo}`).subscribe((res: any) => {
      this.footerLogo = res;
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
