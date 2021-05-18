import React from "react";
import { MdSearch } from "react-icons/md";

export default function Search() {
  return (
    <div className="search">
      <MdSearch />
      <input type="text" placeholder="Search" />
    </div>
  );
}
