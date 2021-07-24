import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive()
export class ProtoTableActionBarItemDirective {

  @Output()
  public action = new EventEmitter<void>();

  @HostListener('click')
  protected actionClick(): void {
    this.action.emit();
  }
}
