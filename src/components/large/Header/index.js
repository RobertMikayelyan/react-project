import React from "react";
import Block from "../../styledComponents/Block";
import Text from "../../styledComponents/Text";
import { Switch, Route, Link } from "react-router-dom";
import Users from "../../../pages/Users";
import styled from "styled-components";

const MenuLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 3px;
  color: white;
`;

const Header = () => {
  return (
    <Block
      height="70px;"
      background="grey"
      flex
      justifyContent="space-evenly"
      alignItems="center"
      size="25px"
    >
      <Block>
        <Text>
          <MenuLink to="/UserList">Users list</MenuLink>
        </Text>
      </Block>
      <Block>
        <Text>
          <MenuLink to="/ToDoList">Random Users</MenuLink>
        </Text>
      </Block>
      <Block>
        <Text>
          <MenuLink to="/AllUsers">All Users</MenuLink>
        </Text>
      </Block>
    </Block>
  );
};

export default Header;
