import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from "./vistas/cards/cards.component";
import { NgFor } from '@angular/common';
import { ApiService } from './service/api.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CardsComponent, NgFor]
})
export class AppComponent {
  title = 'CardsEva';
  products = [];

  constructor(private api: ApiService){}


ngOnInit(){
  this.api.getProducts().subscribe((data: any)=>{
    console.log(data);
    this.products = data;
  });
}
}