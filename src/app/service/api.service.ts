import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "https://api.escuelajs.co/api/v1/products"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(URL);
  }
}
