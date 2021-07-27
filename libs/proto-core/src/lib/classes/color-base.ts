import { ElementRef, Input } from '@angular/core';
import { Directive, HostBinding } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Directive()
export abstract class ColorBase {

  @HostBinding('class')
  public abstract readonly hostClass: string;

  @Input()
  public set color(value: ThemePalette) {
    const colorPalette = value || this.defaultColor;
    if (colorPalette) {
        this.elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
    }
  }

  protected readonly defaultColor = undefined;

  constructor(private readonly elementRef: ElementRef) {}
}
