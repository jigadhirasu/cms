import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-flex-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flex-table.component.html',
  styleUrl: './flex-table.component.scss',
})
export class FlexTableComponent implements OnInit {
  @Input() tableKeys: string[] = [];
  @Input() displayedtableData: { [key: string]: any }[] = [];

  constructor() {}

  ngOnInit() {}
}
