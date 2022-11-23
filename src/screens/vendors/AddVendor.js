import React, {Component } from 'react';
import ConfirmCancel from '../../components/confirmCancel/ConfirmCancel';
import {connect} from 'react-redux';
import {getVendorsAsync, deleteVendorsAsync} from '../../actions/vendorActions';



class AddVendor extends Component{
    render(){
        return(
            <div className="content-inner">
            <div className="row flex-row">
                            <div className="col-xl-12">
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Add New Vendor</h4>
                                    </div>
                                    <div className="widget-body">
                                        <form className="needs-validation" noValidate>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Vendor Store</label>
                                                <div className="col-lg-5">
                                                    <input type="text" className="form-control" placeholder="Enter Vendor Store Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Email Address *</label>
                                                <div className="col-lg-5">
                                                    <div className="input-group">
                                                        <input type="email" className="form-control" placeholder="Enter vendor associated email" required />
                                                        <div className="invalid-feedback">
                                                            Please enter a valid email
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Name of Store Owner *</label>
                                                <div className="col-lg-5">
                                                    <input type="text" className="form-control" placeholder="Name of Store Owner" required />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid city
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Phone Number</label>
                                                <div className="col-lg-5">
                                                    <div className="input-group">
                                                        <span className="input-group-addon addon-primary">
                                                            <i className="la la-phone"></i>
                                                        </span>
                                                        <input type="text" className="form-control" placeholder="Phone number"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                            <div className="col text-left">
                                                <div className="styled-checkbox">
                                                    <input type="checkbox" name="checkbox" id="activeV" />
                                                    <label htmlFor="activeV">Set Status to Active?</label>
                                                </div>
                                            </div>
                    
                </div>

                                            <div className="em-separator separator-dashed"></div>
                                            <div className="form-group row mb-5">
                                             
                                            </div>
                                           
                                            <ConfirmCancel onClick={this.addVendor} confirmName={"Add Vendor"} cancelName={"Cancel"} cancelUrl={"/vendors"}/>

                                        </form>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </div>
            
        )
    }
}

    const mapStateToProps = (state) => {
        return {
          vendor: state.vendor.vendors,
          prodcat: state.productCategory.prodcat,

      
        };
      };
      //lol..
      const mapDispatchToProps = (dispatch) => {
        return {
          addVendor: ()=> dispatch(getVendorsAsync()),
          deleteVendor: (id)=> dispatch(getVendorsAsync(id)),
        };
      };
      
      export default connect(mapStateToProps, mapDispatchToProps)(AddVendor);
      