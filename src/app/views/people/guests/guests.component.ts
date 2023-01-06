import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/People/user";
import {UsersService} from "../../../services/People/users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {

  constructor(private usersService: UsersService,
              private routerService: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usersData = this.usersService.getGuests();
  }

  usersData: User[];

  columns = [
    {
      key: 'name',
      label: 'Имя',
      _style: { width: '40%' }
    },
    { key: 'registered', label: 'Последнее посещение', _style: { width: '20%' } },
    { key: 'role', label: 'Роль', _style: { width: '20%' } },
    { key: 'status', _style: { width: '15%' } }
  ];

  getBadge(status: string) {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }

  details_visible = Object.create({});

  onRowClick($event: any) {
    // TODO: redirect to guest details
    console.log('Row clicked');
    console.log($event);
    this.routerService.navigateByUrl('/people/user-details/'+ $event.item.id);

  }
}
