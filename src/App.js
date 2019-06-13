import React from 'react';
import styled from 'styled-components';

import { Tabs, TabLabel, TabContent } from './Tabs/Tabs';
import Accordion from './ExpansionPanel/Accordion';

const App = () => 
  <Tabs>
    <Label>
      <TabLabel index={1}>Tab 1</TabLabel>
      <TabLabel index={2}>Tab 2</TabLabel>
      <TabLabel index={3}>Tab 3</TabLabel>
    </Label>
    <TabContent to={1}><Accordion/></TabContent>
    <TabContent to={2}>Content 2</TabContent>
    <TabContent to={3}>Content 3</TabContent>
  </Tabs>

export default App;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  font-size: 10pt;
  background-color: #2196f3;
  font-family: Arial Unicode MS;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  margin-bottom: 20px;
`