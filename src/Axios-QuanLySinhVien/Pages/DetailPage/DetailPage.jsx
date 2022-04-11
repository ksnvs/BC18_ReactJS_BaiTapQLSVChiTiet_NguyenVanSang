import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  off_loading_action,
  on_loading_action,
} from "../../Redux/action/loadingAction";
import { BASE_URL } from "../../Redux/constant/quanLySvConstant";

class DetailPage extends Component {
  state = {
    detailInfo: null,
  };
  componentDidMount() {
    this.props.onLoading();
    let idUrl = this.props.match.params.id;

    axios({
      method: "GET",
      url: `${BASE_URL}/${idUrl}`,
    })
      .then((res) => {
        this.setState({ detailInfo: res.data });
        // this.setState({ isLoading: false });
        this.props.offLoading();
      })
      .catch((err) => {
        this.props.offLoading();
      });
  }
  render() {
    return (
      <div className="container p-3 mx-auto">
        <h2>Thông tin chi tiết</h2>
        <div>
          <p>
            <span className="text-primary">Tên:</span>{" "}
            {this.state.detailInfo?.name}
          </p>
          <p>
            <span className="text-primary">Email: </span>{" "}
            {this.state.detailInfo?.email}
          </p>
          <p>
            <span className="text-primary">Điện thoại: </span>{" "}
            {this.state.detailInfo?.phone}
          </p>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onLoading: () => {
      dispatch(on_loading_action());
    },
    offLoading: () => {
      dispatch(off_loading_action());
    },
  };
};

export default connect(null, mapDispatchToProps)(DetailPage);
