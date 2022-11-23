import React, { Component } from "react";
import DataTable from '../../../components/DataTable/DataTable';
import {connect} from 'react-redux'

class Payments extends Component {
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
    //  return this.props.products.map(p =>{
    //       return( <tr>
    //           <td><span className="text-primary"></span>{p.name}</td>
              
    //           <td>{p.description}</td>
    //           <td>{p.price}</td>
    //           <td>{p.vendor.name}</td>
               {/* <td><div className="btn-group mr-1 mb-2 show">
      <button type="button" className="btn btn-warning btn-sm">Pending</button>
      <a className="btn btn-primary btn-sm dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <i className="la la-angle-down mr-0"></i>
      </a>
      <div className="dropdown-menu" x-placement="top-start" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(91px, -145px, 0px)'}}>
          <a className="dropdown-item" href="#delivered">Delivered</a>
          <a className="dropdown-item" href="#pending">Pending</a>
          <a className="dropdown-item" href="#failed">Failed</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#cancel">Cancel Order</a>
      </div>
  </div></td>  */}
              // <td className="td-actions">
              //     <a href="#"><i className="la la-edit edit"></i></a>
              //     <Link to="" title="Delete User" onClick={(e)=>{this.props.deleteProduct(p.id); e.preventDefault()}}><i className="la la-close delete"></i></Link>
              // </td>
          // </tr>)
      // })
      
  }

  }
  
  const mapStateToProps = (state) => {
    return {
        // products: state.product.products,

    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    //   getProducts: () => dispatch(getProductsAsync()),
    //   deleteProduct: (id) => dispatch(deleteProductAsync(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Payments);