import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputField from '../../../components/inputField/InputField';
// import TextArea from '../../components/inputField/TextArea';
import ConfirmCancel from '../../../components/confirmCancel/ConfirmCancel';
import {addProductCategoryAsync} from '../../../actions/productCategoryActions';
import { Redirect } from 'react-router';


class AddCategory extends Component{
    componentDidMount(){
        console.log("users on category page", this.props.user.name)
    }

    state={
        name: "",
        icon: "",
        description: "",
        parentCategory: "",
        // vendor: "",
        status: "pending_approval",
        // errors: {},
        // fields: {},
    }

    // handleValidation(){
    //     let fields = this.state.fields;
    //     let errors = {};
    //     let formisValid = true;

    //     if(!fields["name"]){
    //         formisValid = false;
    //         errors["name"]= "You havent entered a category name yet"
    //     }
    //     if(typeof fields["name"] !== "undefined"){
    //         if(!fields["name"].match(/^[a-zA-Z]+$/)){
    //             formisValid =false;
    //             errors["Category name can only be letters"];
    //         }
    //     }
    // this.setState({errors: errors});
    // return formisValid;
    // }

    render(){
        return(
            <div className="content-inner">
            <div className="row flex-row">
                            <div className="col-xl-12">
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Create Category</h4>
                                    </div>
                                    <div className="widget-body">
                                        <form className="needs-validation" noValidate>
                                            {/* <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">For which Vendor? *</label>
                                                <div className="col-lg-5">
                                                    <InputField 
                                                        className={"form-control"}
                                                        type={"text"}
                                                        name={"vendor"}
                                                        onChange={this.onChange}
                                                        // max={"8"}


                                                    />
                                                </div>
                                            </div> */}
                                              <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Select Parent Category *</label>
                                                <div className="col-lg-5">
                                                    <div className="select">
                                                        
                                                        <select name="parentCategory" value={this.state.parentCategory} onChange={this.onChange} placeholder="Select a parent category" className="custom-select form-control" required >
                                                            <option value="">No Parent Selected</option>
                                                        {
                                                        this.props.prodcat.map((category) =>{ return(<option value={category.id}>{category.name}</option>)})
                                                          
    
                                                        }
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please select an option
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Category Name *</label>
                                                <div className="col-lg-5">
                                                    <InputField 
                                                        className={"form-control"}
                                                        type={"text"}
                                                        name={"name"}
                                                        onChange={this.onChange}
                                                        max={"8"}


                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Category Icon *</label>
                                                <div className="col-lg-5">
                                                <select name='state' style={{height: '45px', fontFamily:'Arial, FontAwesome'}}>
                                                    <option value=''>&#xf039; &nbsp; All States</option>
                                                    <option value='enabled' style={{color:'green'}}>&#xf00c; &nbsp; Enabled</option>
                                                    <option value='paused' style={{color:'orange'}}>&#xf04c; &nbsp; Paused</option>
                                                    <option value='archived' style={{color:'red'}}>&#xf023; &nbsp; Archived</option>
                                                </select>
                                                    {/* <InputField 
                                                        className={"form-control"}
                                                        type={"text"}
                                                        name={"icon"}
                                                        onChange={this.onChange} */}
                                                        {/* // max={"8"} */}


                                                    {/* /> */}
                                                </div>
                                            </div>


                                            <div className="form-group row d-flex align-items-center mb-5">
                                            <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Description</label>
                                            <div className="col-lg-5">
                                                        <InputField
                                                            className={"form-control"}
                                                            type={"text"}
                                                            name={"description"}
                                                            onChange={this.onChange}
                                                        />
                                                        </div>
                                                </div>
                                            {/* <div className="form-group row d-flex align-items-center mb-5">
                                            <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Status</label>
                                            <div className="col-lg-5">
                                                        <InputField
                                                            className={"styled-checkbox"}
                                                            type={"checkbox"}
                                                            name={"pending_approval"}
                                                            onChange={this.onChange}
                                                        />
                                                        </div>
                                                </div> */}
                                            <div className="em-separator separator-dashed"></div>
                                            <div className="form-group row mb-5">
                                             
                                            </div>
                                           
                                           <ConfirmCancel onClick={this.addProductCategory} confirmName={"Create Category"} cancelUrl={'/categories'} cancelName={"Cancel"}/>
                                        </form>
                                    </div>
                                </div>
                                
                            </div>
                        </div> 
                        </div>
                        
                    
        )
    }

    addProductCategory = (e)=>{
        e.preventDefault();
        // if(this.handleValidation()){
        //     console.log("Form is valid");
        // }else{
        //     alert("You have errors with your form")
        // }
        this.props.addProductCategory(this.state);
    }
    onChange = (e) => {
        e.preventDefault()
        // let fields = this.state.fields;
        // fields[field] = e.target.value;
        // this.setState({fields})
        this.setState({ [e.target.name]: e.target.value });
      };

}
const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    prodcat: state.productCategory.prodcat,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductCategory: (data) => dispatch(addProductCategoryAsync(data)),
    
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
