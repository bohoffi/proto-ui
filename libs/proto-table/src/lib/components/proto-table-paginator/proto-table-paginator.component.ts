import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'proto-ui-table-paginator',
  templateUrl: './proto-table-paginator.component.html',
  styleUrls: ['./proto-table-paginator.component.scss']
})
export class ProtoTablePaginatorComponent {

  @HostBinding('class')
  public readonly hostClass = 'proto-ui-table-paginator';
}
