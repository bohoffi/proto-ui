import { Component, ElementRef } from '@angular/core';

import { ColorBase } from '@proto-ui/core';

@Component({
  selector: 'proto-ui-table-paginator',
  templateUrl: './proto-table-paginator.component.html',
  styleUrls: ['./proto-table-paginator.component.scss'],
})
export class ProtoTablePaginatorComponent extends ColorBase {
  public readonly hostClass = 'proto-ui-table-paginator';

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
