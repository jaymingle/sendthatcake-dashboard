import React, { Component } from "react";
import { connect } from "react-redux";
import DataTable from "../../../components/DataTable/DataTable";
import {getOrderAsync} from '../../../actions/orderActions'
import { getStatus } from "../../../utils/utils";

class Orders extends Component {
  componentDidMount(){
    this.props.getSinOrder()
  }
  componentDidUpdate(){
    // console.log("Order page",this.props.order.location)
    // this.props.getProducts();
  }
  render() {
    // console.log("ORder PGE");

    return (
      <DataTable
        title={"Orders"}
        href={""}
        btntitle={"Please make an order from the main site"}
        breadCrumbTitle={"Order"}
        mainTitle={"My Orders"}
        crumbLink={"/orders"}
        // tHead={'Order Column'}
        // tData ={"OrderData"}
        renderHeader={this.renderHeader}
        renderData={this.renderData}
      />
    );
  }
  renderHeader = () => {
    return (
      <tr>
        {["Order Id", "Item Ordered", "Price", "Sending To" ,"Status", "Actions"].map(
          (head) => (
            <th key='orders123xxxxx'>{head}</th>
          )
        )}
      </tr>
    );
  };
  renderData = () => {
    // const data=[{name:''}]
    console.log("this prodcat", this.props.prodcat);
    return this.props.order?.map((order) => {
      return (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>
            <span className="text-primary"></span>
            {order.product.map(d=>{return(d.product.name)})}
          </td>

          <td>{order.amount}</td>
          <td>{order.location?.name}</td>
          
          {/* <td>{d.createdBy}</td> */}
          <td>
            <div className="btn-group mr-1 mb-2 show">
              <button type="button" className="btn btn-warning btn-sm">
                {getStatus(order.status)}
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
               
                <a className="dropdown-item" href="#received">
                  Received Order
                </a>
                {/* <a className="dropdown-item" href="#failed">
                  Failed
                </a> */}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#cancel">
                  Cancel Order
                </a>
              </div>
            </div>
          </td>
          <td className="td-actions">
            <a href="#">
              <i className="la la-eye eye"></i>
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
    getSinOrder: () => dispatch(getOrderAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
