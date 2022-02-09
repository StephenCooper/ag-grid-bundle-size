import { createApp } from 'vue'
import App from './App.vue'

import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';

ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule, SetFilterModule])

createApp(App).mount('#app')
