import React, { Component } from "react";
import DasnhSachSinhVien from "./DasnhSachSinhVien/DasnhSachSinhVien";
import ModalSinhVien from "./ModalSinhVien/ModalSinhVien";
import { sinhVienServ } from "./sinhVienServ/sinhVienSer";
import { SET_DANH_SACH_SV } from "./Redux/constant/quanLySvConstant";
import { connect } from "react-redux";

class AxiosQuanLySinhVien extends Component {
  state = {
    dssv: [],
  };
  componentDidMount() {
    let isSuccees = true;
    sinhVienServ
      .layDanhSinhVien()
      .then((res) => {
        this.props.setDssv(res.data);
      })
      .catch((err) => {
        isSuccees = false;
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container">
        <p className="display-3 pt-2 text-center">Quản lý sinh viên</p>
        <ModalSinhVien />
        <DasnhSachSinhVien />
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
  };
};

export default connect(null, mapDispatchToProps)(AxiosQuanLySinhVien);
