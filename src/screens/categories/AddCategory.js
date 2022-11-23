import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from '../../components/inputField/InputField';
// import TextArea from '../../components/inputField/TextArea';
import ConfirmCancel from '../../components/confirmCancel/ConfirmCancel';
import { addProductCategoryAsync } from '../../actions/productCategoryActions';
import { Redirect } from 'react-router';


class AddCategory extends Component {
    componentDidMount() {
        console.log("users on category page", this.props.user.name)
    }

    state = {
        name: "",
        icon: "",
        description: "",
        parentCategoryId: "",
        vendor: "",
        status: "approved",
    }

    render() {
        return (
            <div className="content-inner">
                <div className="row flex-row">
                    <div className="col-xl-12">
                        <div className="widget has-shadow">
                            <div className="widget-header bordered no-actions d-flex align-items-center">
                                <h4>Create A Category</h4>
                            </div>
                            <div className="widget-body">
                                <form className="needs-validation" noValidate>
                                    <div className="form-group row d-flex align-items-center mb-5">
                                        <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">For which Vendor? *</label>
                                        <div className="col-lg-5">
                                            {/* <InputField 
                                                        className={"form-control"}
                                                        type={"text"}
                                                        name={"vendor"}
                                                        onChange={this.onChange}
                                                        // max={"8"}


                                                    /> */}
                                            <select onChange={this.vendorSelect} name="vendor" className="custom-select form-control" required >
                                                {
                                                    this.props.vendor?.map((v) => { return (<option value={v.id}>{v.name}</option>) })


                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row d-flex align-items-center mb-5">
                                        <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Parent Category*</label>
                                        <div className="col-lg-5">
                                            <select onChange={this.vendorSelect} name="parentCategoryId" className="custom-select form-control" required >
                                                {console.log("Catcat", this.props.categories)}
                                                <option disabled selected value=''>Select a category</option>
                                                {
                                                    this.props.categories?.filter(category => { return category.vendor?.id == this.state.vendor }).map((cat) => { return (<option value={cat.id}>{cat.name}</option>) })


                                                }
                                            </select>
                                            {/* <InputField 
                                                        className={"form-control"}
                                                        type={"text"}
                                                        name={"parentCategoryId"}
                                                        onChange={this.onChange}
                                                        // max={"8"}


                                                    /> */}
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
                                            <InputField
                                                className={"form-control"}
                                                type={"text"}
                                                name={"icon"}
                                                onChange={this.onChange}
                                            // max={"8"}


                                            />
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
                                    <div className="form-group row d-flex align-items-center mb-5">
                                        <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">Status</label>
                                        <div className="col-lg-5">
                                            <InputField
                                                className={"styled-checkbox"}
                                                type={"checkbox"}
                                                name={"status"}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="em-separator separator-dashed"></div>
                                    <div className="form-group row mb-5">

                                    </div>

                                    <ConfirmCancel onClick={this.addProductCategory} confirmName={"Create Category"} cancelUrl={this.cancel} cancelName={"Cancel"} />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        )
    }

    vendorSelect = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    cancel = () => {
        return <Redirect to="/dashboard/categories" />
    }

    addProductCategory = (e) => {
        e.preventDefault();
        this.props.addProductCategory(this.state);
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
        categories: state.productCategory.prodcat,
        vendor: state.vendor.vendorL,

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addProductCategory: (data) => dispatch(addProductCategoryAsync(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
