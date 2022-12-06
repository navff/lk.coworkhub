import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
  public removeDeskModelVisible = false;
  public deskToRemoveId: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onCloseRemoveDeskModal() {
    this.removeDeskModelVisible = false;
  }
  onRemoveDeskClick(deskId: string) {
    this.removeDeskModelVisible = !this.removeDeskModelVisible;
    this.deskToRemoveId = deskId;
  }

  removeDesk() {
    // do remove desk by this.deskToRemoveId
    console.log('Remove desk ' + this.deskToRemoveId);
    this.removeDeskModelVisible = !this.removeDeskModelVisible;
    this.deskToRemoveId = '';
  }

  onDeskClick(deskId: string){
    alert('Desk clicked ' + deskId);
  }
}
