

<template>
  <ag-grid-vue
    style="width: 500px; height: 500px"
    class="ag-theme-alpine"
    :gridOptions="gridOptions"
    :columnDefs="columnDefs"
    :rowData="rowData"
  >
  </ag-grid-vue>
</template>


<script>
import { AgGridVue } from "ag-grid-vue3";

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
    return {
      columnDefs: [
        { field: "make", enableRowGroup: true },
        { field: "model", enableRowGroup: true },
        { field: "price", aggFunc: "sum" },
      ],

      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
      ],

      gridOptions: {
        defaultColDef: {
          filter: true,
          enableRowGroup: true,
        },
        rowGroupPanelShow: "always",
      },
    };
  },
};
</script>

<style lang="scss">
@import "~ag-grid-community/dist/styles/ag-grid.css";
@import "~ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
