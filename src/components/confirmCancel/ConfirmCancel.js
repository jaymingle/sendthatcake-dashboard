import React ,{Component  } from "react";
import {Link} from 'react-router-dom';


class ConfirmCancel extends Component{
    render(){
        return(
            <div className="text-right"> 
            <Link className="btn btn-shadow btn-outline-success mr-1 mb-2" onClick={this.props.onClick} type={this.props.type} >{this.props.confirmName}</Link>
            <Link to={this.props.cancelUrl} className="btn btn-danger btn-shadow" type="button">{this.props.cancelName}</Link>
        </div>
        )
    }
}

export default ConfirmCancel;