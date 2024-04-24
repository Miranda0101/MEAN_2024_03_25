import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  toChild: string = 'Hello from Parent'
  fromChild: string = '';
  message2: string = '';
  constructor() { }


  ngOnInit(): void {
  }

  onKeyup(message: HTMLInputElement){
    this.toChild = message.value;
  }
  onCustomEvent(message: string){
    this.fromChild = message;
  }
  newMessage(message: HTMLInputElement){
    this.message2 = message.value;
  }
}
