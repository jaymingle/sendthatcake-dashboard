import React, { Component } from "react";
import DataTable from "../../components/DataTable/DataTable";
import { connect } from "react-redux";
import { getUsersAsync, deleteUserAsync } from "../../actions/userActions";
import {Link} from 'react-router-dom'

class Users extends Component {
  componentDidMount() {
    console.log("Users", this.props.users);
    this.props.getUser();
  }
  render() {
    return (
      <DataTable
        title={"Users"}
        // href={"/dashboard/auth"}
        btntitle={"Go to Register Page to create new user"}
        breadCrumbTitle={"Add user"}
        mainTitle={"All Users"}
        crumbLink={"/users"}
        // tHead={'user Column'}
        // tData ={"UserData"}
        renderHeader={this.renderHeader}
        renderData={this.renderData}
      />
    );
  }
  renderHeader = () => {
    return (
      <tr>
        {[
          "First Name",
          "Last Name",
          "Email",
          "Phone",
          " User Type",
          "Role",
          "Phone Verified",
          "Email Verified",
          "Status",
          "Actions",
        ].map((head) => (
          <th key={head}>{head}</th>
        ))}
      </tr>
    );
  };

  renderData = () => {
    // const data=[{name:''}]
    console.log("this users", this.props.users);
    return this.props.users?.map((u) => {
      return (
        <tr key={u}>
          <td>
            <span className="text-primary"></span>
            {u.firstName}
          </td>

          <td>{u.lastName}</td>
          <td>{u.email}</td>
          <td>{u.phone}</td>
          <td>{u.type}</td>
          <td>{u.role}</td>
          <td>{u.phone_verified}</td>
          <td>{u.email_verified}</td>
          <td>
            <div className="btn-group mr-1 mb-2 show">

            {u.status == "active"?
            <button className="btn btn-success btn-sm" >{u.status}</button>
            :
            <button className="btn btn-danger btn-sm">{u.status}</button>
            }
        </div>
       
    </td> 
          <td className="td-actions">
            <a href="#">
              <i className="la la-edit edit"></i>
            </a>
            <Link to="" title="Delete User" onClick={(e)=>{this.props.deleteUser(u.id); e.preventDefault()}}><i className="la la-close delete"></i></Link>

          </td>
        </tr>
      );
    });
  };
}
const mapStateToProps = (state) => {
  return {
    // products: state.product.products,
    users: state.user.userL,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUsersAsync()),
    deleteUser: (id) => dispatch(deleteUserAsync(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
