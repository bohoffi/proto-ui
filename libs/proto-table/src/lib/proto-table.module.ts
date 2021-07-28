import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtoTableComponent } from './components/proto-table/proto-table.component';
import { ProtoTableContainerDirective } from './directives/proto-table-container.directive';
import { ProtoTableActionBarDirective } from './directives/proto-table-action-bar.directive';
import { ProtoTableExportActionDirective } from './directives/proto-table-export-action.directive';
import { ProtoTablePrintActionDirective } from './directives/proto-table-print-action.directive';
import { ProtoTableColumnSelectionActionDirective } from './directives/proto-table-column-selection-action.directive';
import { ProtoTablePaginatorDirective } from './directives/proto-table-paginator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProtoTableComponent,

    ProtoTableContainerDirective,
    ProtoTableActionBarDirective,
    ProtoTableExportActionDirective,
    ProtoTablePrintActionDirective,
    ProtoTableColumnSelectionActionDirective,
    ProtoTablePaginatorDirective
  ],
  exports: [
    ProtoTableComponent,

    ProtoTableContainerDirective,
    ProtoTableActionBarDirective,
    ProtoTableExportActionDirective,
    ProtoTablePrintActionDirective,
    ProtoTableColumnSelectionActionDirective,
    ProtoTablePaginatorDirective
  ]
})
export class ProtoTableModule {}
