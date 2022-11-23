import React, { Component } from "react";
import DataTable from '../../../components/DataTable/DataTable';
import {connect} from 'react-redux'
import { getOrderAsync } from "../../../actions/orderActions";

class Payments extends Component {
  componentDidMount(){
    this.props.getPaymentOrder()
  }
  render() {
    return (
      <div>
        <DataTable
          title={"Payments"}
          // href={"/dashboard/payments"}
          btntitle={"You cannot create a payment like this"}
          breadCrumbTitle={"Payments Page"}
          mainTitle={"All Payments"}
          crumbLink={"/payments"}
          // tHead={"Payment Column"}
          // tData={"PaymentData"}
          renderHeader={this.renderHeader}
          renderData={this.renderData}
        />
      </div>
      )
    }
    renderHeader=() =>{
      return( <tr>
          {["Order", "Payment Type", "Extra Info", "Actions"].map((head)=><th>{head}</th>)}
         
      </tr>)

  }

  renderData=()=>{
      // const data=[{name:''}]
      console.log("this prodcat", this.props.products)
     return this.props.products.map(p =>{
          return( <tr>
               <td><span className="text-primary"></span>{p.name}</td>
              
               <td>{p.description}</td>
               <td>{p.price}</td>
               <td>{p.vendor.name}</td>
         
              
           </tr>)
      })
      
  }

  }
  
  const mapStateToProps = (state) => {
    return {
        // products: state.product.products,
        order: state.order.gOrder,


    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getPaymentOrder: () => dispatch(getOrderAsync()),
    //   deleteProduct: (id) => dispatch(deleteProductAsync(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Payments);