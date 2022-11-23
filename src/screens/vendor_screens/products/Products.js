import React, {Component, useDebugValue } from 'react';
import { connect } from "react-redux";
import { getProductsAsync, deleteProductAsync, updateProductAsync } from "../../../actions/productActions";
import DataTable from '../../../components/DataTable/DataTable';
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

class Products extends Component{
  componentDidMount(){

    console.log("Products are ", this.props.getProducts.name);
    this.props.getProducts()

  }
    render(){
        return(
            <DataTable 
                title={"Products"} 
                href={'/dashboard/add-product'} 
                btntitle={"Add Product"} 
                breadCrumbTitle={"Products"} 
                mainTitle={"All Products"} 
                crumbLink={"/products"}
                // tHead={'columns'}
                // tData ={"Data"}
                
                renderHeader={this.renderHeader}
                renderData={this.renderData}
                />
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
    renderHeader=() =>{
      return( <tr>
          {["ID","Name", "Descriptions", "Image", "Vendor", "Date Added", "Status", "Actions"].map((head)=><th key={head}>{head}</th>)}
         
      </tr>)

  }

  renderData=()=>{
      // const data=[{name:''}]
      console.log("this prodcatzzz", this.props.products, this.props.vendor)
      console.log("this vendor", this.props.vendor)

     return this.props.products?.filter(prod=>{ return prod.vendor?.id==this.props.vendor?.id}).map(p =>{
          return( <tr key={p}>
              <td><span className="text-primary"></span>{p.id}</td>
              <td>{p.name}</td>   
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>{p.vendor?.name}</td>
              <td>{p.createdOn}</td>

              <td><div className="btn-group mr-1 mb-2 show">
        <button type="button" className="btn btn-warning btn-sm">{p.status}</button>
        {
        p.status == "disabled" || p.status == "approved" 
        ?
        <div>
        <a className="btn btn-primary btn-sm dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i className="la la-angle-down mr-0"></i>
        </a>
     
        <div className="dropdown-menu" x-placement="top-start" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(91px, -145px, 0px)'}}>
            

            {p.status == "disabled"?
            <a className="dropdown-item" onClick={(e)=>{this.changeStatus(p,"approved"); e.preventDefault()}} >Enable</a>
            :
            null
            }
            <div className="dropdown-divider"></div>
            {p.status == "approved"?
            <a className="dropdown-item" onClick={(e)=>{this.changeStatus(p,"disabled"); e.preventDefault()}} >Disable</a>
          
            :
            null
            }
        </div>
        </div>
        :
        null
       }
    </div>
    </td> 
              <td className="td-actions">
                  <a href="#"><i className="la la-edit edit"></i></a>
                  <Link to="" title="Delete User" onClick={(e)=>{this.props.deleteProduct(p.id); e.preventDefault()}}><i className="la la-close delete"></i></Link>
              </td>
          </tr>)
      })
      
  }
  changeStatus = (cat, status)=>{
    const p ={...cat}
    p.status = status;
    delete p.vendor; //removing vendor data from request sent to api
    delete p.productCategory; //removing vendor data from request sent to api
    delete p.quantityAvailable; //removing vendor data from request sent to api
    delete p.pictures; //removing vendor data from request sent to api
    delete p.productAttributes; //removing vendor data from request sent to api
    //add other things to change here example d.name, d.description.. you can write in another method
    this.props.updateProduct(p.id, p)
}

  }
  
  const mapStateToProps = (state) => {
    return {
        products: state.product?.products,
        vendor: state.login.user.vendor,

    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getProducts: () => dispatch(getProductsAsync()),
      deleteProduct: (id) => dispatch(deleteProductAsync(id)),
      updateProduct: (id, data) => dispatch(updateProductAsync(id, data))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Products);