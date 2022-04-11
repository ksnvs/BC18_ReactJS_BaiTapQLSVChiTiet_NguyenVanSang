import React from "react";
import { NavLink } from "react-router-dom";

export default function NavRoute() {
  return (
    <div className="container m-5">
      <NavLink exact activeClassName="text-danger" className="mx-3" to={"/"}>
        Trang chủ
      </NavLink>
      <NavLink activeClassName="text-danger" className="mx-3" to={"/dssv"}>
        Danh sách
      </NavLink>
      {/* <Link className="mx-3" to={"/detail"}>
        Chi tiết
      </Link> */}
    </div>
  );
}
