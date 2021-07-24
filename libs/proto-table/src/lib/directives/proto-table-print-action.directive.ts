import { Directive } from '@angular/core';
import { ProtoTableActionBarItemDirective } from './proto-table-action-bar-item.directive';

@Directive({
  selector: 'button[proto-ui-table-print-action]'
})
export class ProtoTablePrintActionDirective extends ProtoTableActionBarItemDirective { }
