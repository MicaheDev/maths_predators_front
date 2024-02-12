import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
export class DropdownBtnComponent implements OnInit {
  dropDownOpen: boolean = false;
  @Input() dropDownItems: DropDownItems[] = [];
  language!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.language = params['lang'];
    });
  }

  checkLanguage() {
    switch (this.language) {
      case 'es':
        return 'Español';
        break;
      case 'en':
        return 'Ingles';
        break;
      default:
        return 'Español';
    }
  }

  changeDropDownState() {
    this.dropDownOpen = !this.dropDownOpen;
  }
}
