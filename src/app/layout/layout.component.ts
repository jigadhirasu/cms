import { Component, signal, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { HeaderComponent } from "./header/header.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    MenuComponent,
    HeaderComponent,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  showFiller = false;

  drawer = viewChild.required('drawer', { read: MatDrawer });

}
