import { Directive } from '@angular/core';
import { ProtoTableActionBarItemDirective } from './proto-table-action-bar-item.directive';

@Directive({
  selector: 'button[proto-ui-table-column-selection-action]'
})
export class ProtoTableColumnSelectionActionDirective extends ProtoTableActionBarItemDirective { }
