import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-filials',
  templateUrl: './filials.component.html',
  styleUrls: ['./filials.component.scss']
})
export class FilialsComponent implements OnInit {

  @ViewChild("myNameElem") addFilialContainer: ElementRef;

  addingFilialMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAddFilialPress(){
    this.addingFilialMode = true;
  }

}
