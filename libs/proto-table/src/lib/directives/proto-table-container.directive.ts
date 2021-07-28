import { AfterContentInit, ContentChild, Directive, EventEmitter, HostBinding, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProtoTableComponent } from '../components/proto-table/proto-table.component';
import { ProtoTableActionBarDirective } from './proto-table-action-bar.directive';
import { ProtoTablePaginatorDirective } from './proto-table-paginator.directive';

@Directive({
  selector: 'proto-ui-table-container, [proto-ui-table-container]'
})
export class ProtoTableContainerDirective implements AfterContentInit, OnDestroy {

  @HostBinding('class')
  public readonly hostClass = 'proto-ui-table-container';

  @ContentChild(ProtoTableActionBarDirective)
  public actionBar: ProtoTableActionBarDirective | undefined;

  @ContentChild(ProtoTableComponent)
  public table: ProtoTableComponent | undefined;

  @ContentChild(ProtoTablePaginatorDirective)
  public paginator: ProtoTablePaginatorDirective | undefined;

  public get onExport(): EventEmitter<void> | undefined {
    return this.actionBar?.export;
  }

  public get onPrint(): EventEmitter<void> | undefined {
    return this.actionBar?.print;
  }

  public get onColumnSelection(): EventEmitter<void> | undefined {
    return this.actionBar?.columnSelection;
  }

  private readonly subscriptions = new Subscription();

  public ngAfterContentInit(): void {
    if (this.actionBar) {
      // this.initActionBar();
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // private initActionBar(): void {

  // }
}
