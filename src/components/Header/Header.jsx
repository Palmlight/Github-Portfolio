import React from "react";
import styled, {keyframes} from 'styled-components'
import logo from "./../../assets/Octocat.png";

const HeaderWrapper = styled.header`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;


const LogoBounce = keyframes`
    0%, 100% {
        bottom: 0;
    }

    50% {
        bottom: 20px;
    }
`;

const Logo = styled.img`
  padding-top: 20px;
  height: 100px;
  pointer-events: none;
  position: relative;
  animation: ${LogoBounce} infinite 5s linear;
`;


const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} className="App-logo" alt="logo" />
      <h1>My Github Portfolio</h1>
    </HeaderWrapper>
  );
};

export default Header;
