import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive()
export class ProtoTableActionBarItemDirective {

  @HostBinding('class')
  public readonly hostClass = 'proto-ui-table-action-bar-item';

  @Output()
  public action = new EventEmitter<void>();

  @HostListener('click')
  protected actionClick(): void {
    this.action.emit();
  }
}
