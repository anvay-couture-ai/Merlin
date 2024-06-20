import { useState } from "react";

const useTable = () => {
  const [state, setState] = useState({
    data: null,
    fetchVariables: {
      loading: false,
      error: false,
      started: false,
      errorMessage: null,
    },
    pagination: {
      pageSize: 20,
      pageNumber: 1,
    },
    filters: [],
    rows: {
      selectedRows: [],
    },
    columns: {
      selectedColumns: null,
    },
  });

  return { state, setState };
};

export default useTable;
