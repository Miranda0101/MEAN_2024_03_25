import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];

  red: boolean = true;
  green: boolean = false;
  yellow: boolean = false;

  keyword = '';
  constructor(private dataService: ProductsService) { }

  ngOnInit(): void {
  }

  getAllProducts(){
    this.products = this.dataService.getData;
  }

}
