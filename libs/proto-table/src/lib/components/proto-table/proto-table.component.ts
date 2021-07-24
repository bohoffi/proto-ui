import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'proto-ui-table',
  templateUrl: './proto-table.component.html',
  styleUrls: ['./proto-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProtoTableComponent {

  @HostBinding('class')
  public readonly hostClass = 'proto-ui-table';
}
