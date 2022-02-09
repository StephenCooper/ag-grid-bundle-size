import { Component } from '@angular/core';
import { GridOptions, ColDef } from 'ag-grid-community';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columnDefs: ColDef[] = [
    { field: 'make', enableRowGroup: true },
    { field: 'model', enableRowGroup: true },
    { field: 'price', aggFunc: 'sum' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  gridOptions: GridOptions = {
    defaultColDef: {
      filter: true,
      enableRowGroup: true,
    },
    rowGroupPanelShow: 'always'
  }

}