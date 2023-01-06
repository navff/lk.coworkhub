import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilialService} from "../../../../services/Infrastructure/filial.service";
import {Filial} from "../../../../models/infrastructure/filial";

@Component({
  selector: 'app-filial-select',
  templateUrl: './filial-select.component.html',
  styleUrls: ['./filial-select.component.scss']
})
export class FilialSelectComponent implements OnInit {
  filials: Filial[];

  @Input() selectedFilialId: string = '0';
  @Output() selected: EventEmitter<Filial> = new EventEmitter<Filial>();

  constructor(
    private filialService: FilialService
  ) { }

  ngOnInit(): void {
    this.filials = this.filialService.getFilials();
  }

  onSelectFilial() {
    const selectedFilial = this.filials.find((f) => f.id == this.selectedFilialId);
    this.selected.emit(selectedFilial);
  }
}
