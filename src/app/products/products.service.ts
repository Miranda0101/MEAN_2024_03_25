import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private $products: any = [  
    {
    id: '781191d9-81b8-4b5d-9be7-16c2f2e22b25',
    title: 'Hammer',
    price: 12.99,
    date: new Date(2023,2,22),
    quantity: 10,
  },
  {
    id: '4bcb5d5d-98b4-47c1-81e9-63a338d20b9f',
    title: 'Screwdriver',
    price: 6.99,
    date: new Date(2023,2,21),
    quantity: 15,
  },
  {
    id: 'c6e86160-34fa-4ec7-960f-9de27db0e05c',
    title: 'Wrench',
    price: 8.99,
    date: new Date(2023,2,20),
    quantity: 5,
  },
  {
    id: '437cdd70-c6d7-4b9c-8db1-2c456234b3c3',
    title: 'Pliers',
    price: 9.99,
    date: new Date(2023,2,19),
    quantity: 20,
  },
  ];

  constructor() { }
  get getData(){
    return this.$products;
  }
  set setData(value: any){
    this.$products = [...this.$products, value];
  }
}
