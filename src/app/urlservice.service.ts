import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlserviceService {

  constructor(private http:HttpClient) { }
  posturl(data):Observable<any>{
    return this.http.post(`https://urlshortnernode.herokuapp.com/`,data)
  }
  redirecturl(id):Observable<any>{
    return this.http.get(`https://urlshortnernode.herokuapp.com/`+id)
  }
}
