import React from "react";
import Block from "../../styledComponents/Block";
import Text from "../../styledComponents/Text";
import { Switch, Route, Link } from "react-router-dom";
import Users from "../../../pages/Users";
import styled from "styled-components";

const MenuLink = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  return (
    <Block height="70px;" background="yellow" flex justifyContent="flex-end">
      <Block>
        <Text>
          <MenuLink to="/UserList">Users list</MenuLink>
        </Text>
      </Block>
      <Block>
        <Text>
          <MenuLink to="/ToDoList">To Do list</MenuLink>
        </Text>
      </Block>
    </Block>
  );
};

export default Header;
