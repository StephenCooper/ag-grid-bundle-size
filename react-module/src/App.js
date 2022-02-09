import React, { useState } from 'react';
import { AgGridReact } from '@ag-grid-community/react';

import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';

ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule, SetFilterModule])


const App = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  const [columnDefs] = useState([
    { field: 'make', enableRowGroup: true },
    { field: 'model', enableRowGroup: true },
    { field: 'price', aggFunc: 'sum' }
  ]);

  const [gridOptions] = useState(
    {
      defaultColDef: {
        filter: true,
        enableRowGroup: true,
      },
      rowGroupPanelShow: 'always'
    });

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        gridOptions={gridOptions}
        rowData={rowData}
        columnDefs={columnDefs}
      >
      </AgGridReact>
    </div>
  );
};

export default App;