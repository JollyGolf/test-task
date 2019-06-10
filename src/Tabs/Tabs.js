import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Label from './TabLabel';

const Tabs = ({ indexDefaultTab }) => {
  const [activeTab, setTab] = useState(indexDefaultTab);
  const Content = () => 
    (activeTab === 1) ? <Tab1/> : 
    (activeTab === 2) ? <Tab2/> : 
    (activeTab === 3) ? <Tab3/> : null;
  const changeTab = index => () => setTab(index);
  const withHOC = index => Label => 
    <Label 
      onClick={ changeTab(index) } 
      active={ (activeTab === index) ? 'active' : null }
    >ITEM { index }</Label>;
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

Tabs.propTypes = {
  indexDefaultTab: PropTypes.number
}

Tabs.defaultProps = {
  indexDefaultTab: 1
}

export default Tabs;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  font-size: 10pt;
  background-color: #2196f3;
  font-family: Arial Unicode MS;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`
