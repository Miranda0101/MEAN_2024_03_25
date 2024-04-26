import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: User[] = []
  constructor(private users: UserService) { }

  ngOnInit(): void {
    this.users.getData().subscribe((res)=>{
  
      this.userList = res;
      console.log(this.userList);
    });
  }

  getUsers(){
    console.log("get users invoked")
    this.users.getData().subscribe((res)=>{
  
      this.userList = res;
      console.log(this.userList);
    });
    // console.log(data);
  }

}
