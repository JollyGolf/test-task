import React, { useState } from 'react';
import styled from 'styled-components';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import TabLabel from './TabLabel';

const withHOC = activeTabIndex => () => 
  (activeTabIndex === 1) ? <Tab1/> : 
  (activeTabIndex === 2) ? <Tab2/> : 
  (activeTabIndex === 3) ? <Tab3/> : null

const TabFunctional = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const Content = withHOC(activeTabIndex);
  const changeTab = index => () => setActiveTabIndex(index);
  return (
    <Container>
      <Navigation>
        <TabLabel active={activeTabIndex === 1} onClick={ changeTab(1) }>Tab 1</TabLabel>
        <TabLabel active={activeTabIndex === 2} onClick={ changeTab(2) }>Tab 2</TabLabel>
        <TabLabel active={activeTabIndex === 3} onClick={ changeTab(3) }>Tab 3</TabLabel>
      </Navigation>
      <Content /> 
    </Container>
  );
}

export default TabFunctional;

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


// class TabFunctional extends React.Component {
//   constructor() {
//     super()
//     this.state = { activeTabIndex: 1 }
//     this.changeTab = this.changeTab.bind(this)
//   }
  
//   changeTab(index) {
//     this.setState({ activeTabIndex: index });
//   }

//   render() {
//     const { activeTabIndex } = this.state;
//     const Content = withHOC(activeTabIndex);
//     return (
//       <Container>
//         <Navigation>
//           <TabLabel active={activeTabIndex === 1} onClick={this.changeTab.bind(this, 1)}>Tab 1</TabLabel>
//           <TabLabel active={activeTabIndex === 2} onClick={this.changeTab.bind(this, 2)}>Tab 2</TabLabel>
//           <TabLabel active={activeTabIndex === 3} onClick={this.changeTab.bind(this, 3)}>Tab 3</TabLabel>
//         </Navigation>
//         <Content /> 
//       </Container>
//     )
//   }
// }