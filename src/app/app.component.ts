import { Component } from '@angular/core';

let SHEET_DATA: SheetHeader[] = [
  {position: 1, A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {position: 2, A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {position: 3, A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {position: 4, A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {position: 5, A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {position: 6, A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {position: 7, A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {position: 8, A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {position: 9, A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
  {position: 10, A: undefined, B: undefined, C: undefined, D: undefined, E: undefined, F: undefined, G: undefined, H: undefined, I: undefined, J: undefined},
]:

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   displayedColumns: string[] = ['position', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
   dataSource = ELEMENT_DATA;
}
