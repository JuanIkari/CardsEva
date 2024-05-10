import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}

 

  salir() {
    this.router.navigate(['']);
  }

}
