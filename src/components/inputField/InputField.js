import React, { Component } from 'react';


class InputField extends Component {
    render() {
        return (
            <div className="input-group">
                <input 
                style={this.props.style}
                    id={this.props.id}
                    ref={this.props.ref}
                    className={this.props.className}
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    required ={this.props.required} 
                    multiple ={this.props.multiple}
                    maxsize={this.props.maxsize}
                    max={this.props.max}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>{this.props.label}</label>
            </div>

        )
    }
}

export default InputField;