import React from 'react';
import styled from 'styled-components';

import Tabs from './Tabs/TabHOC';

const App = () => (
  <Container>
    <Tabs />
  </Container>
);

export default App;

const Container = styled.div`
  display: flex;
  felx-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: lightgrey;
`