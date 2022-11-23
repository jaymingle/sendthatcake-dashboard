import React,{Component} from 'react'
import InputField from '../../components/inputField/InputField';
import ConfirmCancel from '../../components/confirmCancel/ConfirmCancel';
import {addDeliveryAreaAsync} from '../../actions/deliveryAreaActions';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';



class AddDeliveryArea extends Component{

    state={
        name: "",
        price: "",
        
    }
    render(){
        return(
            <div className="content-inner">
            <div className="row flex-row">
                            <div className="col-xl-12">
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Add A Delivery Area</h4>
                                    </div>
                                    <div className="widget-body">
                                        <form className="needs-validation" noValidate>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Area Name*</label>
                                                <div className="col-lg-5">
                                                    <InputField 
                                                        className={"form-control"}
                                                        type={"text"}
                                                        name={"name"}
                                                        onChange={this.onChange}
                                                        // max={"8"}


                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Delivery Price*</label>
                                                <div className="col-lg-5">
                                                    <InputField 
                                                        className={"form-control"}
                                                        type={"text"}
                                                        name={"price"}
                                                        onChange={this.onChange}
                                                        // max={"8"}


                                                    />
                                                </div>
                                            </div>
                                            <div className="em-separator separator-dashed"></div>
                                            <div className="form-group row mb-5">
                                             
                                            </div>
                                           
                                           <ConfirmCancel onClick={this.addDeliveryArea} confirmName={"Add Delivery Area"} cancelUrl={this.cancel} cancelName={"Cancel"}/>
                                        </form>
                                    </div>
                                </div>
                                
                            </div>
                        </div> 
                        </div>
                        
                    
        )
    }
    cancel =()=>{
        return <Redirect to="/dashboard/delivery-area" />
    }

    addDeliveryArea = (e)=>{
        e.preventDefault();
        this.props.addDeliveryArea(this.state);
    }
    onChange = (e) => {
        e.preventDefault()
        // console.log("event", e.target);
        this.setState({ [e.target.name]: e.target.value });
      };
    }
    const mapStateToProps = (state) => {
      return {
        user: state.login.user,
        deliveryArea: state.deliveryArea?.delivery,
    
      };
    };
    //lol..
    const mapDispatchToProps = (dispatch) => {
      return {
        addDeliveryArea: (data) => dispatch(addDeliveryAreaAsync(data)),
    };
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(AddDeliveryArea);