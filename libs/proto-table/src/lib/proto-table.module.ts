import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';

import { ProtoTableComponent } from './components/proto-table/proto-table.component';
import { ProtoTablePaginatorComponent } from './components/proto-table-paginator/proto-table-paginator.component';
import { ProtoTableContainerDirective } from './directives/proto-table-container.directive';
import { ProtoTableActionBarDirective } from './directives/proto-table-action-bar.directive';
import { ProtoTableExportActionDirective } from './directives/proto-table-export-action.directive';
import { ProtoTablePrintActionDirective } from './directives/proto-table-print-action.directive';
import { ProtoTableColumnSelectionActionDirective } from './directives/proto-table-column-selection-action.directive';

@NgModule({
  imports: [
    CommonModule,

    MatPaginatorModule
  ],
  declarations: [
    ProtoTableComponent,
    ProtoTablePaginatorComponent,

    ProtoTableContainerDirective,
    ProtoTableActionBarDirective,
    ProtoTableExportActionDirective,
    ProtoTablePrintActionDirective,
    ProtoTableColumnSelectionActionDirective
  ],
  exports: [
    ProtoTableComponent,
    ProtoTablePaginatorComponent,

    ProtoTableContainerDirective,
    ProtoTableActionBarDirective,
    ProtoTableExportActionDirective,
    ProtoTablePrintActionDirective,
    ProtoTableColumnSelectionActionDirective
  ]
})
export class ProtoTableModule {}
