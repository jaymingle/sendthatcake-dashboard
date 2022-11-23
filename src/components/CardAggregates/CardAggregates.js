import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CardAggregate extends Component{
    render(){
        return(
            <div className="col-xl-4 col-md-4 col-sm-4">
                <div className="widget widget-12 has-shadow">
                    <div className="widget-body" style={{borderLeft: '{this.props.borderLeft}'}}>
                        <div className="media">
                            <div className="align-self-center ml-5 mr-5">
                                <i className="">{this.props.aggregate}</i>
                            </div>
                            <div className="media-body align-self-center">
                                <div className="title {this.props.textColor}">{this.props.title}</div>
                                <div className="number">{this.props.numbers}</div>
                            </div>
                            <Link to={this.props.infoLink} type="button" className={`btn btn-sm btn-outline-${this.props.buttonStyle}`}>View Info</Link>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default CardAggregate;