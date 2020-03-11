import React from "react";
import Block from "../../components/styledComponents/Block";
import Text from "../../components/styledComponents/Text";
import { connect } from "react-redux";

const ToDoList = props => {
  console.log(props);
  return (
    <Block>
      {props.users &&
        props.users.map(user => (
          <Block>
            <Block
              width="50px"
              height="50px"
              background={`center / cover url(${user.avatar_url})`}
              radius="50%"
            />
            <Text>{user.login}</Text>
          </Block>
        ))}
    </Block>
  );
};

export default connect(
  state => ({
    users: state.UserList.users
  }),
  dispatch => ({})
)(ToDoList);
