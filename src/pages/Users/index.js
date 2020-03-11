import React, { useEffect, useState } from "react";
import { Block, Text } from "../../components";
import { connect } from "react-redux";
import { UserListAction } from "../../actions/";

const Users = props => {
  const [data, setData] = useState(null);

  const randomUsers = data => {
    const set = new Set([]);

    while (set.size < 5) {
      const k = Math.floor(Math.random() * data.length);

      set.add(k);
    }
    const users = [];

    set.forEach(i => {
      users.push(data[i]);
    });
    props.dispatchUsers(users);
  };

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => {
        response.json().then(data => {
          setData(data);
          randomUsers(data);
          console.log(data);
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Block flex wrap justifyContent="space-around">
      {data &&
        data.map(user => (
          <Block margin="30px" flex direction="column" alignItems="center">
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
  state => ({}),
  dispatch => ({
    dispatchUsers(users) {
      dispatch(UserListAction(users));
    }
  })
)(Users);
