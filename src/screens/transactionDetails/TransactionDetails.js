import React, { Component } from "react";
import DataTable from '../../components/DataTable/DataTable';
import {connect} from 'react-redux'
import { getPaymentAsync } from "../../actions/paymentActions";

class TransactionDetails extends Component {
    componentDidMount(){
        console.log("Payment Paystack", this.props.payment)
        this.props.paymentDetails(this.props.match.params.ref);
    }
  render() {
    return (
      <div>
        <DataTable
          title={"Payment Details"}
          btntitle={"You cannot create a payment like this"}
          breadCrumbTitle={"Payment Details"}
          mainTitle={"All Payments Details"}
          crumbLink={"/payments"}
          renderHeader={this.renderHeader}
          renderData={this.renderData}
        />
      </div>
      )
    }
    renderHeader=() =>{
      return( <tr>
          {["Id", "Ref", "Amount Paid", "Channel"].map((head)=><th>{head}</th>)}
         
      </tr>)

  }

  renderData=()=>{
        return( <tr>
            <td><span className="text-primary"></span>{this.props.payment.id}</td>
            
            <td>{this.props.payment.reference}</td>
            <td>{this.props.payment.amount}</td>
            <td>{this.props.payment.channel}</td>
            {/* <td>{this.props.payment.customer.phone}</td> */}
         
        </tr>)
    
    
}

}
  
  const mapStateToProps = (state) => {
    return {
        payment: state.payment.payments,

    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      paymentDetails: (ref) => dispatch(getPaymentAsync(ref)),
    //   deleteProduct: (id) => dispatch(deleteProductAsync(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetails);