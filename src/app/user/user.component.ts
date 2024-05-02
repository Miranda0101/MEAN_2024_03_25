import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './users.model';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
  debounce,
  debounceTime,
  delay,
  filter,
  forkJoin,
  from,
  fromEvent,
  interval,
  map,
  of,
  take,
  takeUntil,
  tap,
  throttleTime,
} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy, AfterViewInit {
  userList: User[] = [];
  constructor(private users: UserService) {}

  obs = new Observable<number>((observer) => {
    console.log('starts');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    observer.error('Something wrong here');
    observer.next(4);
  });

  subscription: Subscription[] = [];

  sub = new Subject<number>();
  behaviorSubj = new BehaviorSubject(0);
  replaySubj = new ReplaySubject(3);

  userInput = '';

  ngOnInit(): void {
    // this.users.getData().subscribe((res) => {
    //   this.userList = res;
    //   console.log(this.userList);
    // });
    // this.subscription?.push(this.obs.subscribe({
    //   next(val){console.log("new value"+ val)},
    //   error(err) { console.log('error here: '+ err)},
    //   complete() { console.log("complete")}
    // }))
    // subscribe to subject 1
    // this.subscription.push(
    //   this.replaySubj.subscribe({
    //     next(val) {
    //       console.log('subscriber A ' + val);
    //     },
    //   })
    // );
    // this.replaySubj.next(1);
    // this.replaySubj.next(2);
    // this.replaySubj.next(3);
    // this.replaySubj.next(4);
    // // subscribe to subject 2
    // this.subscription.push(
    //   this.replaySubj.subscribe((val) => {
    //     console.log('subscriber B ' + val);
    //   })
    // );
    // this.replaySubj.next(5);
    // // subscribe to observable 1
    // this.subscription.push(
    //   this.obs.subscribe((val) => {
    //     console.log('Observer A ' + val);
    //   })
    // );
    // // subscribe to observable 2
    // this.subscription.push(
    //   this.obs.subscribe((val) => {
    //     console.log('Observer B ' + val);
    //   })
    // );
    // Operators
    // of
    // of("hello", [1, 2, 3], 4, 5).subscribe((val) => {
    //   console.log("of "+val);
    // });
    // // from
    // from([1, 2,3]).subscribe((val)=>{
    //   console.log("from "+val)
    // })
    // // fromEvent
    // const btn: HTMLButtonElement|null = document.querySelector('#btn');
    // if(btn){
    //   fromEvent(btn, "click").subscribe((event)=>{
    //     console.log("from event ", event)
    //   })
    // }
    // // interval
    // // interval(1000).subscribe((val)=> {console.log(val)})
    // // forkJoin
    // forkJoin(
    //   of(1, 2,3),
    //   of("hello", "world"),
    //   from([4, 5])
    // ).subscribe(val=>console.log(val))
    // tap, delay
    of(1, 2, 3, 4, 5).pipe(
      // tap((val)=>console.log("in tap "+val)),
      // delay(1000)
      // filter(val => val < 4)
      // take(3)
      map(x => 2 *x)
    ).subscribe((val)=>console.log(val))
    // // takeUntil
    // const obs1 = interval(1000);
    // const obs2 = fromEvent(document, 'click')
    // obs1.pipe(takeUntil(obs2)).subscribe(x => console.log(x))
    
    // switchMap
    // concatMap
    // mergeMap
  }
  ngAfterViewInit(): void {
    // debounceTime, throttleTime
    const elem = document.getElementById('inputFiled');
    // console.log(elem);
    if (elem) {
      const inputEvent = fromEvent(elem, 'input');

      // inputEvent.pipe(debounceTime(1000)).subscribe((event) => {
      //   console.log('debounced ' + this.userInput);
      // });
      inputEvent.pipe(throttleTime(1000)).subscribe((e)=>{
        console.log("throttle "+this.userInput)
      })
    }
  }
  getUsers() {
    console.log('get users invoked');
    this.users.getData().subscribe((res) => {
      this.userList = res;
      console.log(this.userList);
    });
    // console.log(data);
  }
  ngOnDestroy() {
    this.subscription.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
