import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'proto-ui-table-paginator',
  templateUrl: './proto-table-paginator.component.html',
  styleUrls: ['./proto-table-paginator.component.scss']
})
export class ProtoTablePaginatorComponent {

  @HostBinding('class')
  public readonly hostClass = 'proto-ui-table-paginator';

  @Input()
  public set color(value: ThemePalette) {
    const colorPalette = value || this.defaultColor;
    this.elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
  }

  private readonly defaultColor = undefined;

  constructor(private readonly elementRef: ElementRef) { }
}
