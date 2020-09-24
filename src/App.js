import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile.component';

const AppWrapper = styled.div `
  text-align: center;
`

const App = () => {
  return (
    <AppWrapper>
      <Header  logo={logo}/>
      <Profile />
    </AppWrapper>
  );
}

export default App;
