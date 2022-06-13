import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public fb:FormBuilder, public request: RequestService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getTitel();
    this.getZadacha();
    this.getProject();
    this.getCompany_text();
    this.getCompany_img_1();
    this.getConmpany_img_2();
    this.getForm();
  }

  bool_1:any = true;
  bool_2:any = false;
  i:any = 1;
  num:any = '01';
  num_end:any 
  click_next() {
    this.i++
    this.bool_1 = false;
    this.num = '0';
    if(this.i >= this.num_end) {
      this.bool_2= true;
    }
    this.num += this.i;
    this.getTitel();
  }

  click_prev() {
    this.i--;
    this.bool_2= false;
    this.num = '0';
    if(this.i <= 1) {
      this.bool_1 = true;
    }
    this.num += this.i;
    this.getTitel();
  }

  title_data: any = [];
  zadacha_data: any [] = [];
  project_data: any [] = [];
  company_text:any = [];
  company_img_1:any[] = [];
  company_img_2:any = [];
  form_text:any = [];

  getTitel(){
    let ind = this.i;
    this.request.getData(`${environment.http.get_home_title}`).subscribe((res: any) => {
      this.num_end = res.length;
      if(this.num_end < 10){
        this.num_end = "0" + this.num_end;
      }
      if(res[ind-1].id == ind){
        this.title_data = res[ind-1];
      }
    })
  }
  getZadacha(){
    this.request.getData(`${environment.http.get_home_zadacha}`).subscribe((res:any) => {
      this.zadacha_data = res;
    })
  }
  getProject(){
    this.request.getData(`${environment.http.get_home_project}`).subscribe((res:any) => {
      this.project_data = res;
    })
  }
  getCompany_text(){
    this.request.getData(`${environment.http.get_home_company_text}`).subscribe((res:any) => {
      this.company_text = res;
    })
  }
  getCompany_img_1(){
    this.request.getData(`${environment.http.get_home_company_img_1}`).subscribe((res:any) => {
      this.company_img_1 = res;
    })
  }
  getConmpany_img_2(){
    this.request.getData(`${environment.http.get_home_company_img_2}`).subscribe((res:any) => {
      this.company_img_2 = res;
    })
  }
  getForm(){
    this.request.getData(`${environment.http.get_form}`).subscribe((res:any) => {
      this.form_text = res;
    })
  }

  form = this.fb.group({
    firstname: '',
    phonenumber: ['', [Validators.required,Validators.pattern(/^[^A-Za-z]{1,}$/)]],
    email: ['',[Validators.required,Validators.pattern(/^[a-z,0-9,\.]+@[a-z]+\.+[a-z]{2,4}$/)]],
    product: '',
    comment: ['', Validators.required]
  })
  submit(){
    this.form.reset();
  }




}
