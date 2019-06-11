import React, { useState } from 'react';
import styled from 'styled-components';

import Panel from './Panel';

const DummyData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.';

const Accordion = () => {
  const [active, setActive] = useState(0);
  const changeActive = index => () => index !== active ? setActive(index) : setActive(0);
  const renderProps = (index, active) => () => index === active && <Content>{DummyData}</Content>;
  const withHOC = index => Panel => () => 
    <Panel index={index} active={active} onClick={changeActive(index)} render={renderProps(index, active)}/>;
  const Panel1 = withHOC(1)(Panel);
  const Panel2 = withHOC(2)(Panel);
  const Panel3 = withHOC(3)(Panel);
  return (
  	<Container>
  	  <Panel1/>
  	  <Panel2/>
  	  <Panel3/>
  	</Container>
  );
}

export default Accordion;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

const Content = styled.div`
  margin: 0 auto;
  padding: 15px;
`