import React, { useState } from 'react';
import styled from 'styled-components';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Label from './TabLabel';

const Tabs = () => {
  const [activeTab, setTab] = useState(1);
  const Content = () => 
    (activeTab === 1) ? <Tab1/> : 
    (activeTab === 2) ? <Tab2/> : 
    (activeTab === 3) ? <Tab3/> : null;
  const changeTab = index => () => setTab(index);
  const withHOC = index => Label => 
    (activeTab === index) 
      ? <Label onClick={ changeTab(index) } active>Tab {index}</Label> 
      : <Label onClick={ changeTab(index) }>Tab {index}</Label>;
  return (
    <Container>
      <Navigation>
        { withHOC(1)(Label) }
        { withHOC(2)(Label) }
        { withHOC(3)(Label) }
      </Navigation>
      <Content /> 
    </Container>
  );
}

export default Tabs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justifyContent: center;
  margin: 0 auto;
  font-size: 15pt;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
`