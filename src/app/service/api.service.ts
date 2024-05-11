import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

   URL = "https://api.escuelajs.co/api/v1/products";

  getProducts(){
    return this.http.get(this.URL);
  }

  getProduct(id:any){
    return this.http.get(`${this.URL}/${id}`)
  }

  putProduct(product: any){
    return this.http.put(`${this.URL}/${product.id}`, product)
  }

  deleteProduct(id: number){
    return this.http.delete(`${this.URL}/${id}`)
  }
}
