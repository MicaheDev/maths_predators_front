import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  searchBar!: FormGroup;
  showAutocompleteWindow: boolean = false;
  autoCompleteOptions!: string | null

  constructor(public fb: FormBuilder) {
    this.searchBar = fb.group({
      searchText: ['', Validators.required],
    });
  }

  onInputChange(target: any): void {
    console.log('Input value changed:', target.value);
    if (target.value.length > 0) {
      this.autoCompleteOptions = target.value
      this.showAutocompleteWindow = true;
    } else {
      this.autoCompleteOptions = null
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
