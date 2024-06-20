interface ITableConfiguration {
  title: string;
  columns: {
    headers: Array<{
      title: string;
      dataIndex: string;
      dataType: Array<any> | string | number | object | any;
      key: string;
      tooltip?: string;
      colSpan: number;
      render: (data: any, index: number) => object;
      sort?: {
        sortable: boolean;
        defaultOrder: "asc" | "desc";
        sortID: string;
      };
      filters?: {
        filterType: "range" | "discrete" | "search";
        filterID: string;
        discrete?: {
          multiple?: boolean;
          options?: any[];
        };
        range?: {
          defaultMin?: any;
          defaultMax?: any;
        };
        search?: {
          defaultSearch: "";
        };
      };
      search?: {
        searchID: string;
      };
    }>;
    allowHeadersSelection: boolean | false;
    allowHeadersRearrangement: boolean | false;
  };
  rows: {
    allowMultipleRowsSelection: boolean | false;
  };
  pagination?: {
    showPaginationBar?: boolean;
    defaultPageSize?: number;
    position?: "top" | "bottom";
    allowCustomPageSize?: boolean;
  };
  menu?: {
    filters?: {
      allowedHeaders: "*" | string[];
    };
    search?: {
      collapsible: boolean;
      allowedHeaders: "*" | string[];
    };
    sort?: {
      allowedHeaders: string[];
    };
    download?: {
      position: "bar" | "dropdown";
    };
    upload?: {
      position: "bar" | "dropdown";
    };
  };
}

interface ITableState {
  data?: object[];
  fetchVariables?: {
    loading?: boolean;
    error?: boolean;
    started?: boolean;
    errorMessage?: boolean;
  };
  pagination?: {
    pageSize?: number;
    pageNumber?: number;
  };
  filters?: Array<{
    filterName?: string;
    discrete?: {
      values: any[] | any;
    };
    range?: {
      min?: any;
      max?: any;
    };
    search?: {
      searchTerm?: string;
    };
  }>;
  rows?: {
    selectedRows?: number[];
  };
  columns?: {
    visibibleColumns?: string[];
  };
}
