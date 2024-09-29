import { Component, OnInit } from '@angular/core';
import {
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-stt',
  standalone: true,
  imports: [MatButtonToggleModule, RouterOutlet],
  templateUrl: './stt.component.html',
  styleUrl: './stt.component.scss',
})
export class SttComponent implements OnInit {
  defaultToggle = 'group';

  constructor(private router: Router) {}

  ngOnInit() {
    this.onToggleChange(this.defaultToggle);
  }

  onToggleChange(toggleValue: string) {
    if (toggleValue) {
      this.router.navigate(['voice/stt', `${toggleValue}`]);
    }
  }
}
