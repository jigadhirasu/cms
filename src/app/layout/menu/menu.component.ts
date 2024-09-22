import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


interface NavItem {
  name: string;
  click?: () => void;
  children?: NavItem[];
}

const TREE_DATA: NavItem[] = [
  {
    name: 'AI Agent',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Model',
    children: [
      {
        name: 'Chat',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Speech',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
      {
        name: 'Embedding',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  dataSource = TREE_DATA;

  childrenAccessor = (node: NavItem) => node.children ?? [];

  hasChild = (_: number, node: NavItem) => !!node.children && node.children.length > 0;
}
