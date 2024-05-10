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

  getProductById(id: number){
    return this.http.get(`https://api.escuelajs.co/api/v1/products/${id}`)
  }

  putProduct(form:any){
    return this.http.put(`https://api.escuelajs.co/api/v1/products/${form.id}`, form)
  }

  deleteProduct(id: number){
    return this.http.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
