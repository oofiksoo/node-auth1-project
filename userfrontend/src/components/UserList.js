import React, { Component } from "react";
import { connect } from "react-redux";
import { displayUserList } from "../actions/actionCreators";
import Styled from "styled-components";
const UserListContainer = Styled.div`
display:flex;
flex-direction:column;
background-color:#0099cc;
padding:1%;
width:40%;
justify-content:center;
}
`;
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usertransaction: false
    };
  }
  componentDidMount() {
    this.props.displayUserList();
  }
  handleclose = () => {
    this.props.history.goBack();
  };
  render() {
    if (!this.props.usertransaction) {
      return (
        <div className="status">
          <h3> Loading User Data </h3>
        </div>
      );
    }
    return (
      <UserListContainer>
        {console.log(this.props.users, "From UserList")}
        <h1> Registered Users: </h1>
        <div className="userlist">
          {this.props.users.map(user => (
            <div className="usercard" key={user.id}>
              <p> {user.username} </p>
            </div>
          ))}
        </div>

        <div className="closebutton" onClick={() => this.handleclose()}>
          Close
        </div>
      </UserListContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    usertransaction: state.usertransaction
  };
};
export default connect(mapStateToProps, { displayUserList })(UserList);
