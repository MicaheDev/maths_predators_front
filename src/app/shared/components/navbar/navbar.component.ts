import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  showAutocompleteWindow: boolean = false;
  autoCompleteOptions!: string | null;

  constructor() {}

  onInputChange(target: any): void {
    console.log('Input value changed:', target.value);
    if (target.value.length > 0) {
      this.autoCompleteOptions = target.value;
      this.showAutocompleteWindow = true;
    } else {
      this.autoCompleteOptions = null;
      this.showAutocompleteWindow = false;
    }
  }

  languages = [
    {
      name: 'Ingles',
      value: 'en',
      path: 'en',
    },
    {
      name: 'Español',
      value: 'es',
      path: 'es',
    },
  ];
}
