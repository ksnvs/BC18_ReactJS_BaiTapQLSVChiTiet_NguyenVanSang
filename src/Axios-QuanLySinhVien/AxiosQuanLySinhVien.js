import React, { Component } from "react";
import DanhSachSinhVien from "./DanhSachSinhVien/DanhSachSinhVien";
import ModalSinhVien from "./ModalSinhVien/ModalSinhVien";
import { sinhVienServ } from "./sinhVienServ/sinhVienSer";
import { SET_DANH_SACH_SV } from "./Redux/constant/quanLySvConstant";
import { connect } from "react-redux";
import {
  off_loading_action,
  on_loading_action,
} from "./Redux/action/loadingAction";

class AxiosQuanLySinhVien extends Component {
  state = {
    dssv: [],
  };
  componentDidMount() {
    let isSuccees = true;
    this.props.onLoading();
    sinhVienServ
      .layDanhSinhVien()
      .then((res) => {
        this.props.setDssv(res.data);
        this.props.offLoading();
      })
      .catch((err) => {
        isSuccees = false;
        this.props.offLoading();
      });
  }
  render() {
    return (
      <div className="container">
        <p className="display-3 pt-2 text-center">Quản lý sinh viên</p>
        <ModalSinhVien />
        <DanhSachSinhVien />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setDssv: (dssv) => {
      dispatch({
        type: SET_DANH_SACH_SV,
        payload: dssv,
      });
    },
    onLoading: () => {
      dispatch(on_loading_action());
    },
    offLoading: () => {
      dispatch(off_loading_action());
    },
  };
};

export default connect(null, mapDispatchToProps)(AxiosQuanLySinhVien);
