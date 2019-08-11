import React from "react"
import styled from "styled-components"
import logo from "../../images/star.png"

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;

const UnorderContiner = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin:2em 2em 2em 2em;
`;
const List = styled.li`
  text-decoration: none;
  list-style: none;
  margin-left: 20px;
  padding: 10px;
  color: red;
  :hover {
    text-decoration: none;
    color: white;
    cursor: pointer;
    -webkit-transition: bottom 0.1s ease-in-out;
    -moz-transition: bottom 0.1s ease-in-out;
    -o-transition: bottom 0.1s ease-in-out;
    transition: bottom 0.3s ease-in-out;
  }
`
const Anchor = styled.a`
  color: grey;
  text-decoration:none;
  :hover {
    text-decoration: none;
    color: white;
    cursor: pointer;
    -webkit-transition: bottom 0.1s ease-in-out;
    -moz-transition: bottom 0.1s ease-in-out;
    -o-transition: bottom 0.1s ease-in-out;
    transition: bottom 0.3s ease-in-out;
  }
`

const Logo = styled.img`
  border-radius: 50%;
  height: 3em;
  width: 3em;
  margin:2em 2em 2em 2em;
`

const Navbar = () => {

   return (
    <Nav>
      <div>
        <Logo src={logo} title="Logo" alt="MinLogo" />
      </div>
      <div id="navbar">
        <UnorderContiner>
          <List>
            <Anchor href="#">Home</Anchor>
          </List>
          <List>
            <Anchor href="#">About</Anchor>
          </List>
          <List>
            <Anchor href="#">We are</Anchor>
          </List>
          <List>
            <Anchor href="#">Galery</Anchor>
          </List>
          <List>
            <Anchor href="#">Coming Soon</Anchor>
          </List>
          <List>
            <Anchor href="#">Contact</Anchor>
          </List>
        </UnorderContiner>
      </div>
    </Nav>
  )
}

export default Navbar
