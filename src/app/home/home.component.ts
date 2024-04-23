import { Component } from '@angular/core';

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
}
