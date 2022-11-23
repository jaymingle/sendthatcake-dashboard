import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createProductAsync } from '../../actions/productActions';
import ConfirmCancel from '../../components/confirmCancel/ConfirmCancel';
import InputField from '../../components/inputField/InputField';
import Noty from 'noty'
import { getProductCategoryAsync } from '../../actions/productCategoryActions';


class AddProduct extends Component{
    componentDidMount(){
        console.log("Category Name",this.props.prodcat.name);
        // console.log("CategorysMount",this.props.getProductCategory())
        this.props.getProductCategory()
        
    }
    state= {
        productCategory: "",
        vendor: "",
        name: "",
        description: "",
        price: "",
        quantityAvailable:"",
        images: [],
        hidden: true,
        status: "approved",



    }
    render(){
        return(
            <div className="content-inner">
            <div className="row flex-row">
                            <div className="col-xl-12">
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                        <h4>Add A Product</h4>
                                    </div>
                                    <div className="widget-body">
                                    <form id="myForm" name="myForm" className="needs-validation" noValidate ref= {f => (this.myForm =f)}>
                                        <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Select Vendor *</label>
                                                <div className="col-lg-5">
                                                    <div className="select">
                                                        <select onChange={this.vendorSelect} name="vendor" className="custom-select form-control" required >
                                                        {
                                                        this.props.vendor?.map((v) =>{ return(<option value={v.id}>{v.name}</option>)})
                                                          
    
                                                        }
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please select an option
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Select Category *</label>
                                                <div className="col-lg-5">
                                                    <div className="select">
                                                        
                                                        <select onChange={this.vendorSelect} name="productCategory" className="custom-select form-control" required >
                                                        {
                                                        this.props.prodcat?.filter(prodc=>{ return prodc.vendor?.id==this.state.vendor}).map((category) =>{ return(<option value={category.id}>{category.name}</option>)})
                                                          
    
                                                        }
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please select an option
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Name of Product *</label>
                                                <div className="col-lg-5">
                                                    <input type="text" name="name" className="form-control" placeholder="Example: Vanilla Cake" required />
                                                    <div className="invalid-feedback">
                                                        Example: Vanilla Cake
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Description</label>
                                                <div className="col-lg-5">
                                                    <div className="input-group">
                                                        
                                                        <textarea type="text" name="description" className="form-control" placeholder="Example: A 12inch vanilla cake with chocolate toppings"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Price</label>
                                                <div className="col-lg-5">
                                                    <input onChange={this.onchange} type="number" name="price" className="form-control" placeholder="How much will it cost"/>
                                                </div>
                                            </div>
                                           
                                           
                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Quantity Available</label>
                                                <div className="col-lg-5">
                                                    <InputField
                                                        className={'form-control'}
                                                        max= {'3'}
                                                        type={'number'}
                                                        name={'quantityAvailable'}
                                                        onChange={this.onchange}

                                                        />
                                                {/* <input type="number" name="quantityAvailable" className="form-control" placeholder="How many is available"/> */}
                                                    <div className="invalid-feedback">
                                                        Please enter just a number
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group row d-flex align-items-center mb-5">
                                                <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Add Images *</label>
                                                <div className="col-lg-5">
                                                <InputField 
                                                    className={"form-control"}
                                                    type={"file"}
                                                    name= {"images"}
                                                    onChange={this.limitUploadfiles}
                                                    multiple={"multiple"}
                                                    // max={'5'}
                                                    

                                                />
                                                <input 
                                                    hidden={this.state.hidden}
                                                    className={"form-control"}
                                                    type={"text"}
                                                    value={"approved"}
                                                    name= {"status"}
                                                    onChange={this.onchange}
                                                    // max={'5'}
                                                    

                                                />
                                                    <div className="invalid-feedback">
                                                        Accepted image type is png and jpeg only
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="em-separator separator-dashed"></div>
                                            <div className="form-group row mb-5">
                                             
                                            </div>
                                           
                                            <ConfirmCancel onClick={this.createProduct} confirmName={"Add Product"} cancelName={"Cancel"} cancelUrl={"/products"}/>
                                        </form>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </div>
       
        )
    }

    vendorSelect =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    limitUploadfiles = (e)=>{
        console.log("limit files here", e.target.files?.length)
        if(e.target.files?.length > 5){
            new Noty({
                type: 'danger',
                text: 'Oops!! You can only add a maximum of 4 images for this product',
                // timeout: true,
                progressBar: true,
                closeWith: ['button']
                // theme: 'red',
                
            }).show();            
            e.preventDefault()
        }

       
        // const files = e.target.files
        // const uploads=[]
        
        // for(let i =0;i < 4; i++){
        //     const file = files[i]

        // const reader = new FileReader()
        // reader.onload = f =>{
        //     uploads.push(f)
        // }         
        // reader.readAsDataURL(file[0])
        
        // }
    
        // this.setState({
        //     images : uploads
        // })
    }
    
    createProduct =()=>{
         // let myForm = document.getElementById('myForm');
         let formData = new FormData(this.myForm);
        //  formData.vendor = {id:this.state.vendor}
         this.props.createProduct(formData)
        
    }

    onchange =(e)=>{
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value });
    }

}
const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    createProduct: state.product.prod,
    prodcat: state.productCategory?.prodcat,
    vendor: state.vendor.vendorL
    


  };
};
//lol..
const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (data) => dispatch(createProductAsync(data)),
    getProductCategory: () => dispatch(getProductCategoryAsync()),


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);