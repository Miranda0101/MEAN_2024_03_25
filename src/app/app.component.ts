import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN_2024_03_25';

  constructor(private router: Router){}

  gotoParent(){
    this.router.navigate(["parent"])
  }
}
