import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { ItemComponent } from './item/item.component';
import { itemComplete, MenuItem } from './item/menu-item';
import { NAV_ITEMS } from '../../app.navs';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatIconModule,
    ItemComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  dataSource = signal<MenuItem[]>(NAV_ITEMS);

  constructor(private router: Router) {

    this.dataSource().map((item) => {
      itemComplete(item);
    });
  }

  routing = (path: string) => {
    console.log(path);
    this.router.navigate([path]);
  }
}
