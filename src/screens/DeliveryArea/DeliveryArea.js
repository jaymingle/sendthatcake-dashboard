import React,{Component} from 'react';
import {getDeliveryAreaAsync, deleteDeliveryAreaAsync} from '../../actions/deliveryAreaActions';
import {connect} from 'react-redux';
import DataTable from '../../components/DataTable/DataTable';
import { Link } from 'react-router-dom';




class DeliveryArea extends Component{

    componentDidMount(){
        this.props.getDeliveryArea();
    }
    render(){
        return(
            <DataTable 
                title={"Delivery Area"} 
                href={'/dashboard/add-delivery-area'} 
                btntitle={"Add Delivery Area"} 
                breadCrumbTitle={"Add Delivery"} 
                mainTitle={"All Delivery Areas"} 
                crumbLink={"/add-delivery-area"}
               
                renderHeader={this.renderHeader}
                renderData={this.renderData}
            
            
            />
        )
    }
    renderHeader=() =>{
        return( <tr>
            {["Area Name", "Price", "Actions"].map((head)=><th>{head}</th>)}
           
        </tr>)

    }

    renderData=()=>{
        // const data=[{name:''}]
        console.log("this delivery area", this.props.delivery)
       return this.props.delivery?.map(d =>{
            return( <tr>
                <td><span className="text-primary"></span>{d.name}</td>
                <td>{d.price}</td>
                <td className="td-actions">
                    <a href="#" onClick={this.editDeliveryArea}><i className="la la-edit edit"></i></a>
                    <Link to="" title="Delete Area" onClick={(e)=>{this.props.deleteDeliveryArea(d.id); e.preventDefault()}}><i className="la la-close delete"></i></Link>
                </td>
            </tr>)
        })
        
    }

    // deleteCategory = ()=>{
    //     console.log("delete category clicked")
    // }

    editDeliveryArea = ()=>{
        
        console.log("edit category clicked")
    }
}
const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    delivery: state.deliveryArea.delivery,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDeliveryArea: () => dispatch(getDeliveryAreaAsync()),
    deleteDeliveryArea: (id) => dispatch(deleteDeliveryAreaAsync(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryArea);
