import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, signal, viewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { HeaderComponent } from "./header/header.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


type TabItem = {
  label: string;
  content?: string;
}

const TAB_ITEMS: TabItem[] = [
  {
    label: 'Model',
    content: 'Model Content',
  },
  {
    label: 'Agent',
    content: 'Agent Content'
  },
  {
    label: 'Document',
    content: 'Document Content'
  }
]

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

  tabs = signal<TabItem[]>(TAB_ITEMS);

  drawer = viewChild.required('drawer', { read: MatDrawer });


}
