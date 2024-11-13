import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  nameLower: string = 'angular';
  nameUpper: string = 'ANGULAR  ';
  fullName: string = 'aNgUlAr jS ';

  customDate: Date = new Date();

}
