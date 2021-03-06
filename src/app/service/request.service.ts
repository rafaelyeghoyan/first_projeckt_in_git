import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  data = [];
  constructor(public request:HttpClient) { }
  getData (url:string) {
    return this.request.get(url);
  }
}
