import { Component, OnInit } from '@angular/core';
import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tts',
  standalone: true,
  imports: [MatButtonToggleModule, RouterOutlet],
  templateUrl: './tts.component.html',
  styleUrl: './tts.component.scss',
})
export class TtsComponent implements OnInit {
  defaultToggle = 'group';

  constructor(private router: Router) {}

  ngOnInit() {
    this.onToggleChange(this.defaultToggle);
  }

  onToggleChange(toggleValue: string) {
    if (toggleValue) {
      this.router.navigate(['voice/tts', `${toggleValue}`]);
    }
  }
}
