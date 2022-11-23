import React, {Component } from 'react';
import {connect} from 'react-redux';
import {getProductCategoryAsync,deleteProductCategoryAsync, updateProductCategoryAsync} from '../../../actions/productCategoryActions';
import DataTable from '../../../components/DataTable/DataTable';
import { Link } from 'react-router-dom';

// const tHead = [{
//     title: "Title1",
//     title1: "Title1",
//     title2: "Title1",
//     title3: "Title1",
// }]
    

class Categories extends Component {
    // state={
    //     vendorId : this.props.match.params.id
    // }
    componentDidMount(){
        // console.log("Category Name",this.props.prodcat.name);
        // console.log("CategorysMount",this.props.getProductCategory())
        this.props.getProductCategory()
        
    }
    render(){
        return(
            <DataTable 
                title={"Categories"} 
                href={'/dashboard/add-category'} 
                btntitle={"Create Category"} 
                breadCrumbTitle={"Add Category"} 
                mainTitle={"All Categories"} 
                crumbLink={"/categories"}
                // tHead={["Category Name", "Descriptions", "Image", "Created By", "Descriptions", "Image", "Created By"]}
                // tData ={[
                //     ["sdfasdf", "something", "East Legon", "3/21/2020 19:44", '<div className="btn-group mr-1 mb-2 show">
                //     <button type="button" className="btn btn-warning btn-sm">Pending</button>
                //     <a className="btn btn-primary btn-sm dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                //         <i className="la la-angle-down mr-0"></i>
                //     </a>
                //     <div className="dropdown-menu" x-placement="top-start" style={{position: "absolute", willChange: "transform", top: "0px", left: "0px", transform: "translate3d(91px, -145px, 0px)"}}>
                //         <a className="dropdown-item" href="#delivered">Delivered</a>
                //         <a className="dropdown-item" href="#pending">Pending</a>
                //         <a className="dropdown-item" href="#failed">Failed</a>
                //         <div className="dropdown-divider"></div>
                //         <a className="dropdown-item" href="#cancel">Cancel Order</a>
                //     </div>
                // </div>', "Ghc 299.45", `<a href="#"><i className="la la-edit edit"></i></a>
                // <a href="#"><i className="la la-close delete"></i></a>`]
                // ]} 
                renderHeader={this.renderHeader}
                renderData={this.renderData}
            
            
            />
        )
    }

    renderHeader=() =>{
        return( <tr>
            {["ID","Category Name", "Parent", "Descriptions", "Created On", "Last Edited", "Status", "Actions"].map((head)=><th key={head}>{head}</th>)}
           
        </tr>)

    }

    renderData=()=>{
        // const data=[{name:''}]
        console.log("this prodcat", this.props.prodcat)
       return this.props.prodcat.map(d =>{
            return( <tr key={d}>
                <td><span className="text-primary"></span>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.parentCategory?.name}</td>
                {/* <td>{d.vendor?.name }</td> */}
                <td>{d.description}</td>
                <td>{d.createdOn}</td>
                <td>{d.modifiiedOn}</td>
                
                 <td><div className="btn-group mr-1 mb-2 show">
        <button type="button" className="btn btn-warning btn-sm">{d.status}</button>
        {
        d.status == "disabled" || d.status == "approved" 
        ?
        <div>
        <a className="btn btn-primary btn-sm dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i className="la la-angle-down mr-0"></i>
        </a>
     
        <div className="dropdown-menu" x-placement="top-start" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(91px, -145px, 0px)'}}>
            

            {d.status == "disabled"?
            <a className="dropdown-item" onClick={(e)=>{this.changeStatus(d,"approved"); e.preventDefault()}} >Enable</a>
            :
            null
            }
            <div className="dropdown-divider"></div>
            {d.status == "approved"?
            <a className="dropdown-item" onClick={(e)=>{this.changeStatus(d,"disabled"); e.preventDefault()}} >Disable</a>
          
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
                    <a href="#" onClick={this.editCategory}><i className="la la-edit edit"></i></a>
                    <Link to="#" title="Delete Category" onClick={(e)=>{this.props.delProductCagetory(d.id); e.preventDefault()}}><i className="la la-close delete"></i></Link>
                </td>
            </tr>)
        })
        
    }

    changeStatus = (cat, status)=>{
        const d ={...cat}
        console.log("change Status")
        d.status = status;
        delete d.vendor; //removing vendor data from request sent to api
        //add other things to change here example d.name, d.description.. you can write in another method
        this.props.updateCategory(d.id, d)
    }

    editCategory = ()=>{
        
        console.log("edit category clicked")
    }
}
const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    prodcat: state.productCategory.prodcat,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductCategory: () => dispatch(getProductCategoryAsync()),
    delProductCagetory: (id) => dispatch(deleteProductCategoryAsync(id)),
    updateCategory: (id, data) => dispatch(updateProductCategoryAsync(id,data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
