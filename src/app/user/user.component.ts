import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './users.model';
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  userList: User[] = []
  constructor(private users: UserService) { }

  obs = new Observable<number>((observer)=>{
    console.log("starts")
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    observer.error("Something wrong here");
    observer.next(4);
  });


  subscription: Subscription[] = [];

  sub = new Subject<number>();
  behaviorSubj = new BehaviorSubject(0);
  replaySubj = new ReplaySubject(3);

  ngOnInit(): void {
    this.users.getData().subscribe((res)=>{
  
      this.userList = res;
      console.log(this.userList);
    });

    // this.subscription?.push(this.obs.subscribe({
    //   next(val){console.log("new value"+ val)},
    //   error(err) { console.log('error here: '+ err)},
    //   complete() { console.log("complete")}
    // }))

    // subscribe to subject 1
    this.subscription.push(this.replaySubj.subscribe({
      next(val) {console.log("subscriber A " + val)}
    }));
    this.replaySubj.next(1);
    this.replaySubj.next(2);
    this.replaySubj.next(3);
    this.replaySubj.next(4);

    // subscribe to subject 2
    this.subscription.push(this.replaySubj.subscribe(val => {
      console.log("subscriber B " + val)
    }))
    this.replaySubj.next(5);

    // subscribe to observable 1
    this.subscription.push(this.obs.subscribe(val =>{
      console.log("Observer A " + val)
    }))
    // subscribe to observable 2
    this.subscription.push(this.obs.subscribe(val =>{
      console.log("Observer B " + val)
    }))
  }

  getUsers(){
    console.log("get users invoked")
    this.users.getData().subscribe((res)=>{
  
      this.userList = res;
      console.log(this.userList);
    });
    // console.log(data);
  }
  ngOnDestroy(){
    this.subscription.forEach((sub)=>{
      sub.unsubscribe()
    })
  }
}
