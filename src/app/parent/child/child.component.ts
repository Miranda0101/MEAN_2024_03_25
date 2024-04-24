import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() fromParent: string = '';
  @Output() customEvent: EventEmitter<string> = new EventEmitter;
  @Input() message2: string ='';
  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: Event){
    let str = (<HTMLInputElement>event.target)?.value;
    console.log(str)
    this.customEvent.emit(str)
  }

}
