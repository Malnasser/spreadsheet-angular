import { Component } from '@angular/core';

export interface PeriodicElement {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G: string;
  H: string;
  I: string;
  J: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spreadsheet-project';
}
