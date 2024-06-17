import tableData from "./table";
import filtersData from "./filters";

const _data = {
  table: tableData,
  filters: filtersData,
};

const getData = (component) => {
  return _data[component];
};

export default getData;
