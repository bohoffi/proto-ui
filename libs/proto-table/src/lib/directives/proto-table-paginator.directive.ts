import { Directive, ElementRef, Self } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ColorBase } from '@proto-ui/core';

@Directive({
  selector: 'mat-paginator[proto-ui-table-paginator]',
})
export class ProtoTablePaginatorDirective extends ColorBase {
  public readonly hostClass = 'proto-ui-table-paginator';

  constructor(
    @Self() public readonly matPaginator: MatPaginator,
    elementRef: ElementRef
  ) {
    super(elementRef);
    console.log('ProtoTablePaginatorDirective.paginator', this.matPaginator);
  }
}
