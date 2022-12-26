import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-filials',
  templateUrl: './filials.component.html',
  styleUrls: ['./filials.component.scss']
})
export class FilialsComponent implements OnInit {

  @ViewChild("myNameElem") addFilialContainer: ElementRef;

  addingFilialMode: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddFilialPress(){
    this.addingFilialMode = true;
  }

  onSaveNewFilial() {
    this.addingFilialMode = false;
  }

  onEditFilialClick(id: string) {
    this.router.navigateByUrl('/infrastructure/edit-filial/'+ id);
  }
}
