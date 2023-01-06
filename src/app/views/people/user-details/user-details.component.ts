import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/People/user";
import {UsersService} from "../../../services/People/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UsersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user = this.userService.getUser(params['id'])
    })

  }

  getBadge(status: string) {
    return this.userService.mapStatusToCssClass(status);
  }
}
