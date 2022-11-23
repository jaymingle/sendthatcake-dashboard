import React, { Component } from "react";
import { connect } from "react-redux";
import DataTable from "../../components/DataTable/DataTable";
import { getOrderAsync, updateOrderAsync } from "../../actions/orderActions";
import { Link } from "react-router-dom";
import { getStatus } from "../../utils/utils";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrder();
  }
  componentDidUpdate() {
    // console.log("Order page",this.props.order.location)
    // this.props.getProducts();
  }
  render() {
    console.log("ORder PGE");

    return (
      <DataTable
        title={"Orders"}
        href={"/dashboard/create-order"}
        btntitle={"Create An Order"}
        breadCrumbTitle={"Add Order"}
        mainTitle={"All Orders"}
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
      <tr key="kkxiiw">
        {[
          "Id",
          "Product Ordered",
          "Customer Email",
          "Delivery Phone",
          "Delivery Location",
          "Delivery Date",
          "Status",
          "Payment Ref",
          "Actions",
        ].map((head) => (
          <th>{head}</th>
        ))}
      </tr>
    );
  };
  renderData = () => {
    // const data=[{name:''}]
    // console.log("this prodcat", this.props.prodcat);
    return this.props.order.map((order) => {
      return (
        <tr key={order.id}>
          <td>
            <span className="text-primary"></span>
            {order.id}
          </td>

          <td>
            {order.product.map((ordp) => {
              return ordp.product.name;
            })}
          </td>
          <td>{order.email}</td>
          <td>{order.deliveryPhone}</td>
          <td>{order.location?.name}</td>
          <td>{order.deliveryDate}</td>
          
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
               
                <a className="dropdown-item" onClick={()=>this.changeOrderStatus(order.id, 'delivered')} href="#received">
                  Mark as Received
                </a>
                {/* <a className="dropdown-item" href="#failed">
                  Failed
                </a> */}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" onClick={()=>this.changeOrderStatus(order.id, 'cancelled')} href="#cancelled">
                  Cancel Order
                </a>
              </div>
            </div>
          </td>
          <td>
            <Link to={`/transaction-details/${order.paymentRef}`}>{order.paymentRef}</Link>
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
  changeOrderStatus = (id, status) => {
    // const order = { ...id };
    console.log("change Status");
    // order.status = status;
    // delete order.vendor; //removing vendor data from request sent to api
    //add other things to change here example d.name, d.description.. you can write in another method
    this.props.updateOrder(id, status);
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
    getOrder: () => dispatch(getOrderAsync()),
    updateOrder: (id, data) => dispatch(updateOrderAsync(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
