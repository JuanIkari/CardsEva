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
      console.log(data);
      this.products = data;
    });
  }
}
