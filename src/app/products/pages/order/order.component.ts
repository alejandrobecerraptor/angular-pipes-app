import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  isUpperCase: boolean = false;
  orderBy?: keyof Hero | '' = '';

  heroes: Hero[] = [
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Spiderman', canFly: true, color: Color.red },
    { name: 'Iron Man', canFly: true, color: Color.red },
    { name: 'Hulk', canFly: false, color: Color.green },
    { name: 'Wolverine', canFly: false, color: Color.yellow },
    { name: 'Captain America', canFly: false, color: Color.blue },
    { name: 'Thor', canFly: true, color: Color.silver },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(sortBy: keyof Hero): void {
    this.orderBy = sortBy;
  }

}
