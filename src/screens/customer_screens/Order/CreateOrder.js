import React, {Component} from 'react';
import {connect} from 'react-redux';
import ConfirmCancel from '../../components/confirmCancel/ConfirmCancel'


class CreateOrder extends Component{
    render(){
        return(
            <div className="content-inner">
            <div className="row flex-row">
                            <div className="col-xl-12">
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Create An Order</h4>
                                    </div>
                                    <div className="widget-body">
                                        <form className="needs-validation" novalidate>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Order For Who?</label>
                                                <div className="col-lg-5">
                                                    <input type="text" className="form-control" placeholder="Who is receiving that cake?"/>
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Email Address *</label>
                                                <div className="col-lg-5">
                                                    <div className="input-group">
                                                        <input type="email" className="form-control" placeholder="Enter your email" required />
                                                        <div className="invalid-feedback">
                                                            Please enter a valid email
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Delivery Location *</label>
                                                <div className="col-lg-5">
                                                    <input type="text" className="form-control" placeholder="Start typing to select delivery location" required />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid city
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Phone Number</label>
                                                <div className="col-lg-5">
                                                    <div className="input-group">
                                                       
                                                        <input type="text" className="form-control" placeholder="Phone number" required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Delivery Date</label>
                                                <div className="col-lg-5">
                                                    <input type="datetime-local" min="09:00" max="20:00" className="form-control" placeholder="Select a delivery date and time"/>
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Select Product *</label>
                                                <div className="col-lg-5">
                                                    <div className="select">
                                                        <select name="account" className="custom-select form-control" required >
                                                            <option value="">Select an option</option>
                                                            <option>Product 1</option>
                                                            <option>Product 2</option>
                                                            <option>Product 3</option>
                                                            <option>Product 4</option>
                                                            <option>Product 5</option>
                                                            <option>Product 6</option>
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please select an option
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Custom Message</label>
                                                <div className="col-lg-5">
                                                    <textarea className="form-control" placeholder="Type your message here ..." required ></textarea>
                                                </div>
                                            </div>
                                            <div className="em-separator separator-dashed"></div>
                                            <div className="form-group row mb-5">
                                             
                                            </div>
                                           
                                            <ConfirmCancel onClick={this.createOrder} confirm={"Create Order"} cancel={"Cancel"}/>

                                        </form>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                        
                    
        )
    }

createOrder= () =>{
    console.log("Hello order");
}

}
const mapStateToProps = (state) => {
  return {
    user: state.login.user,

  };
};
//lol..
const mapDispatchToProps = (dispatch) => {
  return {
    // addOrder: ()=>{}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);
