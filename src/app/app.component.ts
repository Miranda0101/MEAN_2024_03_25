import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN_2024_03_25';
  newNum = 10;
  newNums = [1, 2, 3]
  bool1 = false;
  bool2 = true;
  constructor(private router: Router){}

  gotoParent(){
    this.router.navigate(["parent"])
  }

  addOne(){
    this.newNum++;
  }
  addItem(){
    // this.newNums.push(this.newNums.length + 1);
    this.newNums = [...this.newNums, this.newNums.length + 1];
    console.log(this.newNums)
  }
}
