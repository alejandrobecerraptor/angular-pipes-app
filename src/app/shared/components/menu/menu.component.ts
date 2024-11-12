import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-fw pi-home',
            routerLink: '/pipes',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-fw pi-dollar',
            routerLink: '/pipes',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-fw pi-globe',
            routerLink: '/pipes',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-fw pi-home',
            routerLink: '/pipes',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-fw pi-dollar',
            routerLink: '/pipes',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-fw pi-globe',
            routerLink: '/pipes',
          },
        ],
      }
    ];
  }
}
