import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { AA, AgentItem } from './agent.data';
import { DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SearchComponent } from "../../layout/search/search.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    DatePipe,
    MatChipsModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressBarModule,
    SearchComponent,
  ],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.scss'
})
export class AgentComponent {

  dataSource = signal<AgentItem[]>(AA);

}
