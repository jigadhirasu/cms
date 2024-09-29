import { Component } from '@angular/core';
import { SearchComponent } from "../../../layout/search/search.component";

@Component({
  selector: 'app-emotion',
  standalone: true,
  imports: [
    SearchComponent,
    SearchComponent,
  ],
  templateUrl: './emotion.component.html',
  styleUrl: './emotion.component.scss'
})
export class EmotionComponent {

}
