import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodos from "./VisibleTodos";
import FilterLinkList from "./FilterLinkList";

import intl from "k-intl";

const FilterLinkListIntl = intl("show")(FilterLinkList);
console.log(FilterLinkListIntl);
const App = () => {
  return (
    <div data-test="component-app">

      <VisibleTodos />
      <AddTodo />
      <FilterLinkListIntl />
    </div>
  );
};

export default App;
