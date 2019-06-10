import React from 'react';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import TabLabel from './TabLabel';

const withHOC = activeTabIndex => {
  const Component = ({...props}) => {
    if (activeTabIndex === 1) {
      return <Tab1 {...props} active={activeTabIndex}/>
    }
    else if (activeTabIndex === 2) {
      return <Tab2 {...props} active={activeTabIndex}/>
    }
    else if(activeTabIndex === 3) {
      return <Tab3 {...props} active={activeTabIndex}/>
    }
  }
  return Component;
}

class TabFunctional extends React.Component {
  constructor() {
    super()
    this.state = { activeTabIndex: 1 }
    this.changeTab = this.changeTab.bind(this)
  }
  
  changeTab(index) {
    this.setState({ activeTabIndex: index });
  }

  render() {
    const { activeTabIndex } = this.state;
    const Content = withHOC(activeTabIndex);
    return (
      <div>
        <TabLabel active={activeTabIndex === 1} onClick={this.changeTab.bind(this, 1)}>Tab 1</TabLabel>
        <TabLabel active={activeTabIndex === 2} onClick={this.changeTab.bind(this, 2)}>Tab 2</TabLabel>
        <TabLabel active={activeTabIndex === 3} onClick={this.changeTab.bind(this, 3)}>Tab 3</TabLabel>
        <Content /> 
      </div>
    )
  }
}

export default TabFunctional;