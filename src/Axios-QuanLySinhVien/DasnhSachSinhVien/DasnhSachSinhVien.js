import React, { Component } from "react";
import { connect } from "react-redux";
import ItemSinhVien from "../ItemSinhVien/ItemSinhVien";

class DasnhSachSinhVien extends Component {
  render() {
    let { dssv } = this.props;
    return (
      <div className="container p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên</th>

              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {dssv.map((sv) => {
              return <ItemSinhVien key={sv.id} sv={sv} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dssv: state.quanLySvReducer.dssv,
  };
};

export default connect(mapStateToProps)(DasnhSachSinhVien);
