import { Component    } from 'angular2/core';
import { Keg          } from './keg.module';
import { KegComponent } from './keg.component';
import { EditKegComponent } from './editKeg.component';
import { LowKegPipe } from './lowKeg.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  pipes: [LowKegPipe],
  directives: [KegComponent, EditKegComponent],
  template: `
    <button class="btn" (click)="toggleFilter()">Toggle Low Kegs</button>
    <keg-view *ngFor="#currentKeg of kegList | LowKegPipe:filterKeg" [keg]="currentKeg" (onEditKeg)="editKeg($event)"></keg-view>
    <edit-keg *ngIf="editVisible" [keg]="selectedKeg" (onCloseForm)="onCloseForm()"></edit-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public selectedKeg: Keg;
  public editVisible: boolean = false;
  public filterKeg: string = "all";

  onCloseForm() {
    this.editVisible = false;
  }

  editKeg(keg: Keg) {
    this.selectedKeg = keg;
    this.editVisible = true;
  }

  toggleFilter() {
    if(this.filterKeg == "low")
      this.filterKeg = "all";
    else this.filterKeg = "low";
  }
}
