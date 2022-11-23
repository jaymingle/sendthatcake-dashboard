import React, {Component, useDebugValue } from 'react';
import { connect } from "react-redux";
import DataTable from '../../components/DataTable/DataTable';
import {Link} from 'react-router-dom';

const columns =[{
    // header1: ["hello"],
    // header2: ["How are you"],
    // header3: ["How old are you"],
}]

const data = [{
    // data1 : this.props.data.map((products, index) =>{
    // }),
    // data2 : "who are u",
    // data3 : "she is lovely",
}]

class Vendors extends Component{
  componentDidMount(){

    console.log("Products are ", this.props.getProducts.name);
    this.props.getProducts()

  }
    render(){
        return(
            <div>Hello</div>
            // <DataTable 
            //     title={"Products"} 
            //     href={'/dashboard/add-product'} 
            //     btntitle={"Add Product"} 
            //     breadCrumbTitle={"Products"} 
            //     mainTitle={"All Products"} 
            //     crumbLink={"/products"}
            //     // tHead={'columns'}
            //     // tData ={"Data"}
                
            //     renderHeader={this.renderHeader}
            //     renderData={this.renderData}
            //     />
    //       <div className="content-inner">
    //       <div className="container-fluid">
              
    //           <div className="row">
    //               <div className="page-header">
    //                 <div className="d-flex align-items-center">
    //                     <h2 className="page-header-title">All Products</h2>
    //                     <div>
    //                     <ul className="breadcrumb">
    //                         <li className="breadcrumb-item"><a href="db-default.html"><i className="ti ti-home"></i></a></li>
    //                         <li className="breadcrumb-item active">Basic Tables</li>
    //                     </ul>
    //                     </div>
    //                 </div>
    //               </div>
    //           </div>
              
    //           <div className="row">
    //               <div className="col-xl-12"> 
                      
    //                   <div className="widget has-shadow">
    //                       <div className="widget-header bordered no-actions d-flex align-items-center">
    //                           <h4>Border</h4>
    //                       </div>
    //                       <div className="widget-body">
    //                           <div className="table-responsive">
    //                               <table className="table mb-0" id="sorting-table">
    //                                   <thead>
    //                                       <tr>
    //                                           <th>Order ID</th>
    //                                           <th>Customer Name</th>
    //                                           <th>Deliv Location</th>
    //                                           <th>Order Date</th>
    //                                           <th><span style={{width: '100px'}}>Status</span></th>
    //                                           <th>Order Total</th>
    //                                           <th>Actions</th>
    //                                       </tr>
    //                                   </thead>
    //                                   <tbody>
    //                                       <tr>
    //                                           <td><span className="text-primary">054-01-GH</span></td>
    //                                           <td>Yaa Mansa</td>
    //                                           <td>East Legon</td>
    //                                           <td>3/21/2020 19:44</td>
    //                                           <td><span style={{width: '100px'}}><span className="badge-text badge-text-small success">Paid</span></span></td>
    //                                           <td>Ghc 299.45</td>
    //                                           <td className="td-actions">
    //                                               <a href="#"><i className="la la-edit edit"></i></a>
    //                                               <a href="#"><i className="la la-close delete"></i></a>
    //                                           </td>
    //                                       </tr>
    //                                       <tr>
    //                                           <td><span className="text-primary">054-03-GH</span></td>
    //                                           <td>Bra Prince</td>
    //                                           <td>Cantoments</td>
    //                                           <td>7/21/2020 8:23</td>
    //                                           <td><span style={{width: '100px'}}><span className="badge-text badge-text-small danger">Failed</span></span></td>
    //                                           <td>Ghc 139.45</td>
    //                                           <td className="td-actions">
    //                                               <a href="#"><i className="la la-edit edit"></i></a>
    //                                               <a href="#"><i className="la la-close delete"></i></a>
    //                                           </td>
    //                                       </tr>
                                          
    //                                   </tbody>
    //                               </table>
    //                           </div>
    //                       </div>
    //                   </div>
                      
    //               </div>
    //           </div>
              
    //       </div> 
    //   </div>



        )
    }
//     renderHeader=() =>{
//       return( <tr>
//           {["Name", "Descriptions", "Image", "Vendor", "Actions"].map((head)=><th>{head}</th>)}
         
//       </tr>)

//   }

//   renderData=()=>{
//       // const data=[{name:''}]
//       console.log("this prodcat", this.props.products)
//      return this.props.products.map(p =>{
//           return( <tr>
//               <td><span className="text-primary"></span>{p.name}</td>
              
//               <td>{p.description}</td>
//               <td>{p.price}</td>
//               <td>{p.vendor.name}</td>
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
    //           <td className="td-actions">
    //               <a href="#"><i className="la la-edit edit"></i></a>
    //               <Link to="" title="Delete User" onClick={(e)=>{this.props.deleteProduct(p.id); e.preventDefault()}}><i className="la la-close delete"></i></Link>
    //           </td>
    //       </tr>)
    //   })
      
//   }
  }
  
  const mapStateToProps = (state) => {
    return {
        products: state.product.products,

    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getProducts: () => dispatch(getProductsAsync()),
    //   deleteProduct: (id) => dispatch(deleteProductAsync(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Vendors);