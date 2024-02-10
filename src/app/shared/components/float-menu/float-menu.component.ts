import { Component } from '@angular/core';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
})
export class FloatMenuComponent {
  menuItems = [
    {
      name: 'acerca',
      path: 'es/about',
      icon: 'fa-solid fa-hand-holding-heart',
    },
    {
      name: 'contenido',
      path: 'es/contents',
      icon: 'fa-solid fa-square-root-variable',
    },
    {
      name: 'preguntas frecuentes',
      path: 'es/faq',
      icon: 'fa-regular fa-circle-question',
    },
    {
      name: 'miembros',
      path: 'es/members',
      icon: 'fa-solid fa-users-viewfinder',
    },
  ];
}
