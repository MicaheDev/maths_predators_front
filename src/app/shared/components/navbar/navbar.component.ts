import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  showAutocompleteWindow: boolean = false;
  autoCompleteOptions!: string | null;
  searchParam!: string;
  searchResults!: any;

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

  constructor(
    public http: HttpClient,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  onInputChange(target: any): void {
    if (target.value.length > 0) {
      this.autoCompleteOptions = target.value;
      this.showAutocompleteWindow = true;
      this.search(target.value);
    } else {
      this.autoCompleteOptions = null;
      this.showAutocompleteWindow = false;
    }
  }

  search(text: string) {
    let url = 'http://localhost:8000/api/courses/search/';

    this.http.get(url + text).subscribe(
      (data) => {
        this.searchResults = data;
      },
      (error) => {
        console.log(error);
      },
    );
  }

  navegate(url: string) {
    this.router.navigateByUrl(url);

    this.autoCompleteOptions = null;
    this.showAutocompleteWindow = false;
  }
}
