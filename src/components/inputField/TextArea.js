import React, {Component} from 'react';
import { extend } from 'jquery';

class TextArea extends Component{
    render(){
        return(
            <div className="form-group row d-flex align-items-center mb-5">
            <label className="col-lg-4 form-control-label d-flex justify-content-lg-end">{this.props.label}</label>
            <div className="col-lg-5">
                <textarea 
                    className={this.props.className} 
                    placeholder={this.props.placeholder}
                    name={this.props.name} 
                    required={this.props.required}
                >

                </textarea>
            </div>
        </div>
        )
    }
}

export default TextArea;