import React from "react";

const FILTER_ALL = "all";
const FILTER_ACTIVE = "active";
const FILTER_DONE = "done";

const TodoFilters = ({applyFilter, status}) => {
  return (
    <ul className="filters">
      <li>
        <a  href="#" className={status === FILTER_ALL ? "selected" : ""} onClick={(e) => { e.preventDefault(); applyFilter(FILTER_ALL);}}>
          All
        </a>
      </li>
      <li>
        <a className={status === FILTER_ACTIVE ? "selected" : ""}  href="#" onClick={(e) => { e.preventDefault(); applyFilter(FILTER_ACTIVE);}}>
          Active
        </a>
      </li>
      <li>
        <a className={status === FILTER_DONE ? "selected" : ""}  href="#" onClick={(e) => { e.preventDefault(); applyFilter(FILTER_DONE);}}>
          Completed
        </a>
      </li>
    </ul>
  );
}

export default TodoFilters;