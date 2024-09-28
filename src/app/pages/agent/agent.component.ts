import { AfterContentInit, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { AA, AgentItem } from './agent.data';
import { DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    DatePipe,
    MatChipsModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.scss'
})
export class AgentComponent {

  dataSource = signal<AgentItem[]>(AA);

}
