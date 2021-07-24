import { Component } from '@angular/core';

@Component({
  selector: 'prototyping-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public export(): void {
    console.log('export');
  }

  public print(): void {
    console.log('print');
  }

  public columnSelection(): void {
    console.log('columnSelection');
  }
}
