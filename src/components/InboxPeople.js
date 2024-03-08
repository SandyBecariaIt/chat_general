import React from "react";
import SearchBox from "../components/SearchBox";
import SideBar from "./SideBar";

 function InboxPeople() {
  return (
    <div className="inbox_people">
      <SearchBox />
      <SideBar />
    </div>
  );
}


export default InboxPeople;