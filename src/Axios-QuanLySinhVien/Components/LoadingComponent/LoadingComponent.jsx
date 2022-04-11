import React, { Component } from "react";
import { connect } from "react-redux";

class LoadingComponent extends Component {
  render() {
    return (
      this.props.isLoading && (
        <div className="container d-flex justify-content-center align-items-center">
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isLoading: state.loadingReducer.isLoading,
  };
};

export default connect(mapStateToProps)(LoadingComponent);
