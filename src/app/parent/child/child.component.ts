import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, 
AfterViewChecked, AfterViewInit, DoCheck {
  @Input() fromParent: string = '';
  @Output() customEvent: EventEmitter<string> = new EventEmitter;
  @Input() message2: string ='';
  constructor() { }

  ngOnInit(): void {
    console.log("child ngOnInit")
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("child ngOnChanges")
  }

  ngAfterContentChecked(): void {
    console.log("child ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("child ngAfterContentInit")
  }
  ngAfterViewChecked(): void {
    console.log("child ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("child ngAfterViewInit")
  }
  ngDoCheck(): void {
      console.log("child ngDoCheck")
  }
  ngOnDestroy(): void {
    console.log("child ngOnDestroy called")
}

  onInput(event: Event){
    let str = (<HTMLInputElement>event.target)?.value;
    console.log(str)
    this.customEvent.emit(str)
  }

}
