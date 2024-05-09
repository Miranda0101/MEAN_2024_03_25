import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // snapshot
    console.log("In snapshot ",this.ar.snapshot.params["id"]);
    // params
    this.ar.params.subscribe((params)=>console.log("params Obs ", params['id']))
    // ParamMap
    this.ar.paramMap.subscribe((param)=>console.log("paramMap ", param))

    // setTimeout(()=>{
    //   this.router.navigate(['products', 'detail', 999])
    // }, 2000)

    console.log("data", this.ar.snapshot.data['productData'])
  }

}
