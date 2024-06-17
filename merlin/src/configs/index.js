import tableConfig from "./table";
import filterConfig from "./filters";

const _configs = {
  table: tableConfig,
  filters: filterConfig,
};

const getConfig = (component) => {
  return _configs[component];
};

export default getConfig;
