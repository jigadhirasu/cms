import { Component, inject, signal, viewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith, tap } from 'rxjs';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';


export type Options = 'like' | '~' | '=' | ':' | '>' | '<' | '|'
const options: string[] = ['like', '~', '=', ':', '>', '<', '|'];

class SearchOption {
  key: string;
  option: string;
  value: string;

  constructor(key: string, option: Options, value: string) {
    this.key = key;
    this.option = option;
    this.value = value;
  }

  toString(): string {
    return `${this.key}${this.option}${this.value}`;
  }
}


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    AsyncPipe,
    JsonPipe,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {


  searchControl = new FormControl('');
  options: string[] = [
    'id:00000000-0000-0000-0000-000000000000',
    'model:tts',
    'name~hero',
  ];
  filteredOptions?: Observable<string[]>;


  selected = (e: MatAutocompleteSelectedEvent) => {
    this.searchControl.setValue('');

    this.addOption(e.option.viewValue);
  }

  addOption = (value: string) => {

    value = value.trim();

    const sop = this.string2Option(value);

    if (sop) {

      // already exists
      if (this.searchOptions().map(searchOption => searchOption.toString()).indexOf(sop.toString()) >= 0) {
        return;
      }

      this.searchOptions.update(searchOptions => [...searchOptions, sop]);
    }
  }

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      tap(value => console.log(value)),
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  string2Option = (value: string): SearchOption | undefined => {
    for (let op of options) {
      if (value.includes(op)) {

        const vv = value.split(op);

        if (op === 'like') {
          op = '~';
        }

        if (op === '=') {
          op = ':';
        }

        return new SearchOption(vv[0].toLocaleLowerCase(), <Options>op, vv[1]);
      }
    }

    return undefined
  }

  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly searchOptions = signal<SearchOption[]>([
    this.string2Option('model=agent')!,
    this.string2Option('name~openai')!,
    this.string2Option('label=lamma')!,
    this.string2Option('label:lamma')!,
  ]);
  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    this.addOption(value);

    event.chipInput!.clear();
  }




  remove(searchOption: SearchOption): void {
    this.searchOptions.update(searchOptions => {
      const index = searchOptions.indexOf(searchOption);
      if (index < 0) {
        return searchOptions;
      }

      searchOptions.splice(index, 1);
      return [...searchOptions];
    });
  }

  edit(searchOption: SearchOption, event: MatChipEditedEvent) {
    const value = event.value.trim();


    const sop = this.string2Option(value);

    // Remove fruit if it no longer has a name
    if (!sop) {
      this.remove(searchOption);
      return;
    }

    // Edit existing fruit
    this.searchOptions.update(searchOptions => {
      const index = searchOptions.indexOf(searchOption);
      if (index >= 0) {
        searchOptions[index] = sop;
        return [...searchOptions];
      }
      return searchOptions;
    });
  }

}
