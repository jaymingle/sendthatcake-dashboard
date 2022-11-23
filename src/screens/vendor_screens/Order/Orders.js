import React, { Component } from "react";
import { connect } from "react-redux";
import DataTable from "../../../components/DataTable/DataTable";
import {getOrderAsync} from '../../../actions/orderActions'
import { getStatus } from "../../../utils/utils";

class Orders extends Component {

  componentDidMount(){
    this.props.getOrder();
    console.log("Order page is",this.props.order);

  }
  componentDidUpdate(){
    // this.props.getOrder();
    console.log("ORder PGE");
  }
  render(){

    return (
      <DataTable
        title={"Orders"}
        href={"/cake-store"}
        btntitle={"Order From Store"}
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
      <tr key="xkjjdsldksdf2">
        {["Id", "Customer Email", "Product","Price", "Delivery Location", "Status", "Actions"].map(
          (head) => (
            <th>{head}</th>
          )
        )}
      </tr>
    );
  };
  renderData = () => {
    // const data=[{name:''}]
    // console.log("this prodcat", this.props.order);
    return this.props.order?.map(vord =>{
      return (
        <tr key={vord.id}>
          <td>
            <span className="text-primary"></span>
            {vord?.id}
          </td>

          <td>{vord.email}</td>
          <td>{vord.product?.map((ordp) =>{return (ordp.product?.name)})}</td>
          <td>Ghc {vord.product.map((pp)=>{return (pp.product.price)* (pp.product.quantity)})}</td>
          <td>{vord.location?.name}</td>
          {/* <td>{d.createdBy}</td> */}
          <td>
            <div className="btn-group mr-1 mb-2 show">
              <button type="button" className="btn btn-warning btn-sm">{getStatus(vord.status)}</button>
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
    vendor: state.login.user.vendor,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getProducts: () => dispatch(getOrderAsync()),
    getOrder: () => dispatch(getOrderAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
