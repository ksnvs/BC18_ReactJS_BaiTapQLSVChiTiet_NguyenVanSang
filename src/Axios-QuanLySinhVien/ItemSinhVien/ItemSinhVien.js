import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_SV, EDIT_SV } from "../Redux/constant/quanLySvConstant";

class ItemSinhVien extends Component {
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
            className="btn btn-danger"
            onClick={() => {
              this.props.deleteSV(sv.id);
            }}
          >
            Xoá
          </button>
        </td>
      </tr>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    deleteSV: (id) => {
      dispatch({ type: DELETE_SV, payload: id });
    },
    editSV: (sv) => {
      dispatch({ type: EDIT_SV, payload: sv });
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemSinhVien);
