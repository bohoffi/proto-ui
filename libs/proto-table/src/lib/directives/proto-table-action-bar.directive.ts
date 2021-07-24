import { AfterContentInit, ContentChild, Directive, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { ProtoTableColumnSelectionActionDirective } from './proto-table-column-selection-action.directive';
import { ProtoTableExportActionDirective } from './proto-table-export-action.directive';
import { ProtoTablePrintActionDirective } from './proto-table-print-action.directive';

@Directive({
  selector: 'proto-ui-table-action-bar, [proto-ui-table-action-bar]'
})
export class ProtoTableActionBarDirective implements AfterContentInit, OnDestroy {

  @ContentChild(ProtoTableExportActionDirective)
  private exportAction: ProtoTableExportActionDirective | undefined;
  @ContentChild(ProtoTablePrintActionDirective)
  private printAction: ProtoTablePrintActionDirective | undefined;
  @ContentChild(ProtoTableColumnSelectionActionDirective)
  private columnSelectionAction: ProtoTableColumnSelectionActionDirective | undefined;

  @HostBinding('class')
  public readonly hostClass = 'proto-ui-table-action-bar';

  @Input()
  public set color(value: ThemePalette) {
    const colorPalette = value || this.defaultColor;
    this.elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
  }

  @Output()
  public export = new EventEmitter<void>();
  @Output()
  public print = new EventEmitter<void>();
  @Output()
  public columnSelection = new EventEmitter<void>();

  private readonly subscriptions = new Subscription();

  private readonly defaultColor = undefined;

  constructor(private readonly elementRef: ElementRef) { }

  public ngAfterContentInit(): void {
    if (this.exportAction) {
      this.subscriptions.add(
        this.exportAction.action.subscribe(() => this.export.emit())
      )
    }
    if (this.printAction) {
      this.subscriptions.add(
        this.printAction.action.subscribe(() => this.print.emit())
      )
    }
    if (this.columnSelectionAction) {
      this.subscriptions.add(
        this.columnSelectionAction.action.subscribe(() => this.columnSelection.emit())
      )
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
