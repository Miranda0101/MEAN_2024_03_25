import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/actions';
import { selectCount } from './store/selectos';

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
  constructor(private router: Router, private store: Store){}

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
  
  countObs = this.store.select(selectCount);
  increment(){
    this.store.dispatch(increment())
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
}

// Redux pattern
// 1. Store 2. Actions 3. Reducers
// NgRx -- state management library
// 1. Store 2. Actions 3. Reducers 4. Effects 5. Selectors