import React, {Component } from 'react';
import {connect} from 'react-redux';
import DataTable from '../../components/DataTable/DataTable';
import {Link} from 'react-router-dom';
import { getVendorsAsync, deleteVendorAsync } from '../../actions/vendorActions';

class Vendor extends Component {
  componentDidMount(){
    // console.log('VEndor Data is', this.props.vendor);
    this.props.getVendor()
  }
    render(){
        console.log("vendor PGE")

        return(
            <DataTable 
            title={"Vendors"} 
            href={'/dashboard/add-vendor'} 
            btntitle={"Add Vendor"} 
            breadCrumbTitle={"Add Vendor"} 
            mainTitle={"All Vendors"} 
            crumbLink={"/vendors"}
            // tHead={'Vendor Column'}
            // tData ={"VendorData"}
            renderHeader={this.renderHeader}
            renderData={this.renderData}
            
            
            />
        )
    }
    renderHeader = () => {
      return (
        <tr>
          {[
            "ID",
            "Name",
            "Email",
            "Phone",
            "User Type",
            "Role",
            "Phone Verified",
            "Email Verified",
            "Status",
            "Actions",
          ].map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      );
    };

    renderData = () => {
      // const data=[{name:''}]
      console.log("this users", this.props.vendors);
      return this.props.vendor?.map((v) => {
        return (
          <tr key={v}>
            <td>
              <span className="text-primary"></span>
              {v.id}
            </td>
  
            <td>{v.name}</td>
            <td>{v.email}</td>
            <td>{v.phone}</td>
            <td>{v.type}</td>
            <td>{v.role}</td>
            <td>{v.phone_verified}</td>
            <td>{v.email_verified}</td>
            <td> <div className="btn-group mr-1 mb-2 show">
              <button type="button" className="btn btn-warning btn-sm">{v.status}</button>
            </div></td>
           
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
            <td className="td-actions">
             
              <Link to="" title="Delete Vendor" onClick={(e)=> {e.preventDefault(); this.props.deleteVendor(v.id); }}><i className="la la-close delete"></i></Link>
  
            </td>
          </tr>
        );
      });
    };

}
const mapStateToProps = (state) => {
  return {
    vendor: state.vendor.vendorL,

  };
};
//lol..
const mapDispatchToProps = (dispatch) => {
  return {
    getVendor: ()=> dispatch(getVendorsAsync()),
    deleteVendor: (id)=> dispatch(deleteVendorAsync(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
