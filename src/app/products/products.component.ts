import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private dataService: ProductsService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.ar.snapshot.queryParams)

    this.ar.queryParamMap.subscribe((param)=>console.log(param))

  }


  getAllProducts(){
    this.products = this.dataService.getData;
  }

}
