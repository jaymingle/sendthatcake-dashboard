import React, { Component } from "react";
import DataTable from '../../../components/DataTable/DataTable';
import {connect} from 'react-redux';
import { getOrderAsync } from "../../../actions/orderActions";

class Reports extends Component {
  render() {
    return (
      <div>
        <DataTable
          title={"Reports"}
          href={"/dashboard/reports"}
          btntitle={""}
          breadCrumbTitle={"Reports Page"}
          mainTitle={"Reports"}
          crumbLink={"/reports"}
          // tHead={"Report Column1"}
          // tData={"ReportData"}
          renderHeader={this.renderHeader}
          renderData={this.renderData}
        />
      </div>
    );
  }
  renderHeader = () => {
    return (
      <tr>
        {["Order Id", "Item Ordered", "Price", "Sending To" ,"Status", "Actions"].map(
          (head) => (
            <th>{head}</th>
          )
        )}
      </tr>
    );
  };
  renderData = () => {
    // const data=[{name:''}]
    console.log("this prodcat", this.props.prodcat);
    return this.props.order.map((order) => {
      return (
        <tr>
          <td>
            <span className="text-primary"></span>
            {order.quantity}
          </td>

          <td>{order.amount}</td>
          <td>{order.location}</td>
          {/* <td>{d.createdBy}</td> */}
          <td>
            <div className="btn-group mr-1 mb-2 show">
              <button type="button" className="btn btn-warning btn-sm">
                Pending
              </button>
              <a
                className="btn btn-primary btn-sm dropdown-toggle d-flex align-items-center"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <i className="la la-angle-down mr-0"></i>
              </a>
              <div
                className="dropdown-menu"
                x-placement="top-start"
                style={{
                  position: "absolute",
                  willChange: "transform",
                  top: "0px",
                  left: "0px",
                  transform: "translate3d(91px, -145px, 0px)",
                }}
              >
                <a className="dropdown-item" href="#delivered">
                  Delivered
                </a>
                <a className="dropdown-item" href="#pending">
                  Pending
                </a>
                <a className="dropdown-item" href="#failed">
                  Failed
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#cancel">
                  Cancel Order
                </a>
              </div>
            </div>
          </td>
          <td className="td-actions">
            <a href="#">
              <i className="la la-edit edit"></i>
            </a>
            <a href="#">
              <i className="la la-close delete"></i>
            </a>
          </td>
        </tr>
      );
    });
  };
}
const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    order: state.order.gOrder,
  };
};
//lol..
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getOrderAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
