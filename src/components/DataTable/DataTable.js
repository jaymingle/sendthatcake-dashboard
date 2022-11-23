import './dataTable.css';
import React, {Component } from 'react';

const $ = require("jquery");
const jzip = require("jzip");
window.JSZip = jzip;

$.DataTable = require("datatables.net");


class DataTable extends Component {
    componentDidMount(){
        // this.$dtbl = $(this.dtbl);
        console.log("COmponent DID MOUNT")
        this.tbl = $('#export-table').DataTable();
    }
    componentDidUpdate(){
        console.log("DID UPDATE")
        // this.tbl.destroy()
        this.tbl = $('#export-table').DataTable();
    }
    render(){
        if($.fn.dataTable.isDataTable(this.tbl)){
            this.tbl.destroy()
        }

        return(
            <div className="content-inner">
                    <div className="container-fluid">
                        
                        <div className="row">
                            <div className="page-header">
	                            <div className="d-flex align-items-center">
	                                <h2 className="page-header-title">{this.props.mainTitle}</h2>
	                                <div>
			                            <ul className="breadcrumb">
			                                <li className="breadcrumb-item"><a href="{this.props.crumbLink}"><i className="ti ti-home"></i></a></li>
			                                <li className="breadcrumb-item active">{this.props.breadCrumbTitle}</li>
			                            </ul>
	                                </div>
	                            </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-xl-12"> 
                                
                                <div className="widget has-shadow">
                                    <div className="widget-header bordered no-actions d-flex align-items-center">
                                    <a href={this.props.href} type="button" className="btn btn-success btn-sm btn-square mr-1 mb-2"><i className="la la-plus"></i>{this.props.btntitle}</a>                                    </div>
                                    <div className="widget-body">
                                        <div className="table-responsive">
                                            <table className="table striped mb-0" width="100%" id="export-table" ref ={dtbl=> this.dtbl =dtbl}>
                                                <thead key={this.props.renderHeader}>
                                                   {this.props.renderHeader()}
                                                </thead>
                                                <tbody>
                                                {this.props.renderData()}
                                                </tbody>
                                                {/* <tbody>
                                                    <tr>
                                                        <td><span className="text-primary"></span>sdfasdf</td>
                                                        <td>something</td>
                                                        <td>East Legon</td>
                                                        <td>3/21/2020 19:44</td>
                                                        {/* <td><div className="btn-group mr-1 mb-2 show">
                                                <button type="button" className="btn btn-warning btn-sm">Pending</button>
                                                <a className="btn btn-primary btn-sm dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    <i className="la la-angle-down mr-0"></i>
                                                </a>
                                                <div className="dropdown-menu" x-placement="top-start" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(91px, -145px, 0px)'}}>
                                                    <a className="dropdown-item" href="#delivered">Delivered</a>
                                                    <a className="dropdown-item" href="#pending">Pending</a>
                                                    <a className="dropdown-item" href="#failed">Failed</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#cancel">Cancel Order</a>
                                                </div>
                                            </div></td> */}
                                                        {/* <td>Ghc 299.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="text-primary">054-03-GH</span></td>
                                                        <td>Bra Prince</td>
                                                        <td>Cantoments</td>
                                                        <td>7/21/2020 8:23</td>
                                                        <td><div className="btn-group mr-1 mb-2 show">
                                                <button type="button" className="btn btn-success btn-sm">Delivered</button>
                                                <a className="btn btn-primary btn-sm dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    <i className="la la-angle-down mr-0"></i>
                                                </a>
                                                <div className="dropdown-menu" x-placement="top-start" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(91px, -145px, 0px)'}}>
                                                    <a className="dropdown-item" href="#">Delivered</a>
                                                    <a className="dropdown-item" href="#">Pending</a>
                                                    <a className="dropdown-item" href="#">Failed</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Cancel Order</a>
                                                </div>
                                            </div></td>
                                                        <td>Ghc 139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody> */}
                                            </table> 
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div> 
                </div>

        )
    }

}

export default DataTable;
