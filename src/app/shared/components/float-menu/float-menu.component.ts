import { Component } from '@angular/core';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
})
export class FloatMenuComponent {
  menuItems = [
    {
      name: 'inicio',
      path: '',
      icon: 'fa-solid fa-house',
    },
    {
      name: 'acerca',
      path: 'about',
      icon: 'fa-solid fa-hand-holding-heart',
    },
    {
      name: 'contenido',
      path: 'contents',
      icon: 'fa-solid fa-square-root-variable',
    },
    {
      name: 'preguntas frecuentes',
      path: 'faq',
      icon: 'fa-regular fa-circle-question',
    },
    {
      name: 'miembros',
      path: 'members',
      icon: 'fa-solid fa-users-viewfinder',
    },
  ];
}
