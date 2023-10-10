import React from "react";

const Menu = ({ onSelectOption }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li onClick={() => onSelectOption("insert")} className="list1">Insert data</li>
        <li onClick={() => onSelectOption("view")} className="list2">View all data</li>
        <li onClick={() => onSelectOption("rank")} className="list3">Get rank</li>
        <li onClick={() => onSelectOption("update")} className="list4">Update score</li>
        <li onClick={() => onSelectOption("delete")} className="list5">Delete one record</li>
      </ul>
    </div>
  );
};

export default Menu;
