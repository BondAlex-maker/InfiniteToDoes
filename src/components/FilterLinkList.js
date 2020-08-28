import React from "react";
import FilterLink from "./FilterLink";
import * as constants from "../actions/constants";

const FilterLinkList = ({ messages }) => {
  return (
    <div data-test="component-filter-link-list">
      <p>
        {messages.show}
        <FilterLink filter={constants.SHOW_ALL}>All</FilterLink>
        {", "}
        <FilterLink filter={constants.SHOW_COMPLETED}>Completed</FilterLink>
        {", "}
        <FilterLink filter={constants.SHOW_ACTIVE}>Active</FilterLink>
      </p>
    </div>
  );
};

export default FilterLinkList;
