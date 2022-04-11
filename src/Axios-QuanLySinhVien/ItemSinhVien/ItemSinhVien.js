import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {
  off_loading_action,
  on_loading_action,
} from "../Redux/action/loadingAction";
import {
  DELETE_SV,
  EDIT_SV,
  SET_DANH_SACH_SV,
} from "../Redux/constant/quanLySvConstant";
import { sinhVienServ } from "../sinhVienServ/sinhVienSer";

class ItemSinhVien extends Component {
  deleteSV = () => {
    this.props.onLoading();
    sinhVienServ
      .xoaSinhVien(this.props.sv.id)
      .then((res) => {
        sinhVienServ
          .layDanhSinhVien()
          .then((res) => {
            this.props.setDssv(res.data);
            alert("Xóa Sinh viên thành công !");
            this.props.offLoading();
          })
          .catch((err) => {
            alert("Load Sinh viên thất bại ! - ", err);
            this.props.offLoading();
          });
      })
      .catch((err) => {
        alert("Xóa Sinh viên thất bại ! - ", err);
        this.props.offLoading();
      });
  };
  render() {
    let { sv } = this.props;
    return (
      <tr>
        <td>{sv.id}</td>
        <td>{sv.name}</td>
        <td>{sv.email}</td>
        <td>{sv.phone}</td>

        <td className="flex">
          <button
            data-toggle="modal"
            data-target="#myModal"
            className="btn btn-success mr-1"
            onClick={() => {
              this.props.editSV(sv);
            }}
          >
            Sửa
          </button>
          <button
            className="btn btn-danger mr-1"
            onClick={() => {
              // this.props.deleteSV(sv.id);
              this.deleteSV();
            }}
          >
            Xoá
          </button>
          <button className="btn btn-primary">
            <NavLink className=" text-white" to={`/detail/${sv.id}`}>
              Xem chi tiết
            </NavLink>
          </button>
        </td>
      </tr>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    // deleteSV: (id) => {
    //   dispatch({ type: DELETE_SV, payload: id });
    // },
    editSV: (sv) => {
      dispatch({ type: EDIT_SV, payload: sv });
    },
    setDssv: (dssv) => {
      dispatch({ type: SET_DANH_SACH_SV, payload: dssv });
    },
    onLoading: () => {
      dispatch(on_loading_action());
    },
    offLoading: () => {
      dispatch(off_loading_action());
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemSinhVien);
