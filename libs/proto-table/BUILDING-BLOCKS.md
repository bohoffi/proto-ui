# TableContainer

# ActionBar

# Table

# DataSource

* bound to `Table`
* <-- receives `page` events from paginator (if available)
* --> hands `length` (totalLength), `pageSize` (current page size), `pageSizeOptions`, `disabled` to paginator (if available)
* e.g.
```html
<mat-paginator [length]="dataSource.totalLength" [pageSize]="dataSource.pageSize"
    [pageSizeOptions]="dataSource.pageSizes" [disabled]="!dataSource.totalLength" (page)="dataSource.page($event)">
```

# Paginator ✅

* bound to `DataSource`
* triggers re-rendering on `page` event (this includes page change and/or page size change)
* THOUGHTS
  * does not need to be wrapped
  * themability could be achived using directive + theme-mixin
  * directive exposes paginator to `TableContainer`
  * directive binds paginator to `DataSource`
* e.g.
```html
<mat-paginator color="primary" proto-ui-table-paginator></mat-paginator>
```