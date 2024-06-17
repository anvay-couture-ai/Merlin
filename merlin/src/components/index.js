import Table from "./artifactory/Table";
import Filters from "./artifactory/Filters";

const _components = {
  table: Table,
  filters: Filters,
};

const getComponent = (name) => {
  return _components[name];
};
export default getComponent;