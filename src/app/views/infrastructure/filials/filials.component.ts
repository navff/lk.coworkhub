import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-filials',
  templateUrl: './filials.component.html',
  styleUrls: ['./filials.component.scss']
})
export class FilialsComponent implements OnInit {

  @ViewChild("myNameElem") addFilialContainer: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  onAddFilialPress(){
    alert('Привет');
    this.addFilialContainer.nativeElement.visible = false;
  }

}
