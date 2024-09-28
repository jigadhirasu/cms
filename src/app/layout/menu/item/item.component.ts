import { Component, input } from '@angular/core';
import { MenuItem } from './menu-item';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    RouterModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  item = input.required<MenuItem>();

  constructor(private router: Router) { }

  toggle = () => {
    this.routing(this.item().path)
    if (!this.item().children) return;

    this.item().is_open = !this.item().is_open;
  }

  routing = (path: string | undefined) => {
    if (!path) return;
    this.router.navigate([path]);
  }

}
