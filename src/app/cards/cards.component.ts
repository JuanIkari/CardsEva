import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() producto?: any;

  edit(producto:any){
    console.log(producto)
  }

  delete(id:number){
    console.log(id)
  }

}

 

