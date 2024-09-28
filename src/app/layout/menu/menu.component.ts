import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { NAV_ITEMS, NavItem } from './menu.nav';
import { Router } from '@angular/router';




@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  dataSource = NAV_ITEMS;

  constructor(private router: Router) { }

  childrenAccessor = (node: NavItem) => node.children ?? [];

  hasChild = (_: number, node: NavItem) => !!node.children && node.children.length > 0;

  routing = (path: string) => {
    console.log(path);  
    this.router.navigate([path]);
  }
}
