import { Component } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  username: string = 'Jack';
  obj = { name: 'Ben' };
  demoString: string = 'Property demo string';
  temp = '<p>Inner HTML</p>';

  name: string = "Emily";

  constructor(private dataService: ProductsService){}

  clear() {
    this.username = '';
    this.demoString = '';
    this.temp = '';
    this.obj.name = '';
  }
  onChange(event: Event) {
    console.log(
      'Change event triggered',
      (<HTMLInputElement>event.target).value
    );
  }
  onKeyUp(event: Event) {
    console.log(
      'Keyup event triggered',
      (<HTMLInputElement>event.target).value
    );
  }
  onInput(event: Event) {
    console.log(
      'Input event triggered',
      (<HTMLInputElement>event.target).value
    );
  }

  addNewProduct(){
    console.log("adding new product")
    this.dataService.setData = {
      id: '04-24-2024',
    title: 'Nails',
    price: 0.99,
    date: new Date(2024,2,24),
    quantity: 40,
    }
  }
}
