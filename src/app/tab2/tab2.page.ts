import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../models/User';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  users: User[];
  constructor(
      private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log(22);
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }
}