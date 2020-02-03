import React, { useEffect, useState } from "react";
import { Block, Text } from "../../components";

const Users = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => {
        response.json().then(data => {
          setData(data);
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

export default Users;
