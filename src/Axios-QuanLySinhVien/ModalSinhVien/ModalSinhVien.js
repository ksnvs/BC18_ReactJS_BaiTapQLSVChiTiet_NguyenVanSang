import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SV, EDIT_SV, UPDATE_SV } from "../Redux/constant/quanLySvConstant";

class ModalSinhVien extends Component {
  state = {
    sinhVien: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
  };

  handleOnChangeEvent = (e) => {
    this.setState({
      sinhVien: { ...this.state.sinhVien, [e.target.name]: e.target.value },
    });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    nextProps.editSV
      ? this.setState({ sinhVien: nextProps.editSV })
      : this.setState({
          sinhVien: {
            id: "",
            name: "",
            email: "",
            phone: "",
          },
        });
  }
  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#myModal"
            onClick={() => {
              this.props.resetEditSV();
            }}
          >
            Thêm Sinh Viên
          </button>
          {/* The Modal */}
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">
                    {this.props.editSV
                      ? "Cập nhật thông tin sinh viên"
                      : "Thông tin sinh viên"}
                  </h4>
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="id">Id</label>
                    {this.props.editSV ? (
                      <input
                        value={this.state.sinhVien.id}
                        disabled
                        type="text"
                        name="id"
                        id="id"
                        className="form-control"
                        // placeholder
                        aria-describedby="helpId"
                        onChange={(e) => {
                          this.handleOnChangeEvent(e);
                        }}
                      />
                    ) : (
                      <input
                        value={this.state.sinhVien.id}
                        type="text"
                        name="id"
                        id="id"
                        className="form-control"
                        // placeholder
                        aria-describedby="helpId"
                        onChange={(e) => {
                          this.handleOnChangeEvent(e);
                        }}
                      />
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Tên</label>

                    <input
                      value={this.state.sinhVien.name}
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      // placeholder
                      aria-describedby="helpId"
                      onChange={(e) => {
                        this.handleOnChangeEvent(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>

                    <input
                      value={this.state.sinhVien.email}
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      // placeholder
                      aria-describedby="helpId"
                      onChange={(e) => {
                        this.handleOnChangeEvent(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Số điện thoại</label>

                    <input
                      value={this.state.sinhVien.phone}
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      // placeholder
                      aria-describedby="helpId"
                      onChange={(e) => {
                        this.handleOnChangeEvent(e);
                      }}
                    />
                  </div>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  {this.props.editSV ? (
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                      onClick={() => {
                        this.props.updateSV(this.state.sinhVien);
                      }}
                    >
                      Lưu
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                      onClick={() => {
                        this.props.addSV(this.state.sinhVien);
                      }}
                    >
                      Thêm
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addSV: (sv) => {
      dispatch({ type: ADD_SV, payload: sv });
    },
    resetEditSV: () => {
      dispatch({ type: EDIT_SV, payload: null });
    },
    updateSV: (sv) => {
      dispatch({ type: UPDATE_SV, payload: sv });
    },
  };
};

let mapStateToProps = (state) => {
  return {
    editSV: state.quanLySvReducer.editSV,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSinhVien);
