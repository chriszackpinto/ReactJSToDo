import React from "react";

const Select = ({ setFilter }) => {
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="select">
      <select onChange={filterHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Ticked</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default Select;
