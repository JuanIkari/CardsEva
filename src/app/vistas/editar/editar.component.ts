import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardsComponent, ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  info: any;

  titulo = new FormControl('');
  precio = new FormControl('');
  descripcion = new FormControl('');

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.api.getProduct(id).subscribe((data: any) => {
      this.info = data;
    });
  }

  onSubmit() {
    const editProduct = {
      id: this.info.id,
      title: this.titulo.value,
      price: this.precio.value,
      description: this.descripcion.value,
    };

    this.api.putProduct(editProduct).subscribe((data: any) => {});
    this.salir();
  }

  salir() {
    this.router.navigate(['']);
  }
}
