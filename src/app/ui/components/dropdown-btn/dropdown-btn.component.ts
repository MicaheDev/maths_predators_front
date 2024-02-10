import { Component, Input } from '@angular/core';

type DropDownItems = {
  path?: string;
  name: string;
  value: string;
  action?: Function;
};

@Component({
  selector: 'app-dropdown-btn',
  templateUrl: './dropdown-btn.component.html',
  styleUrls: ['./dropdown-btn.component.scss'],
})
export class DropdownBtnComponent {
  dropDownOpen: boolean = false;
  @Input() dropDownItems: DropDownItems[] = [];
  @Input() label!: string 

  changeDropDownState() {
    this.dropDownOpen = !this.dropDownOpen;
  }
}
