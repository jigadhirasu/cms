import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-agent-create',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatAutocompleteModule,
  ],
  templateUrl: './agent-create.component.html',
  styleUrl: './agent-create.component.scss'
})
export class AgentCreateComponent {
  myControl = new FormControl('');
  options: string[] = [
    'openai gpt-3 is a powerful tool for generating text',
    'lamma is a powerful tool for generating text',
    'clarifai is a powerful tool for generating text'
  ];
  filteredOptions: Observable<string[]> = of(this.options);

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
