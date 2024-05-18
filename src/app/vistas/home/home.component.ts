import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { NgFor } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NgFor, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'CardsEva';
  products = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getProducts().subscribe((data: any) => {
      data.map((item: any) => {


        let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string
        
        
        let imageNoGarbage = imageStringify
        
        
        .substring(2, imageStringify.length - 2)
        
        
        .replaceAll('\\', ' ')
        
        
        .replaceAll('""', '"')
        
        
        .replaceAll('" "', '"')
        
        
        .replaceAll(' ', '');
        
        
        try {
        
        
        item.images = JSON.parse(imageNoGarbage);
        
        
        item.imagesActual = item.images[0];
        
        
        } catch (e) {}
        
        
        });
      this.products = data;
    });
  }

  addProduct() {
    this.router.navigate(['agregar']);
  }
}
