import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  languages = [
    {
      name: 'Ingles',
      value: 'en',
      path: 'en'
    },
    {
      name: 'Español',
      value: 'es',
      path: 'es'
    }
  ]
}
