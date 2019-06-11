import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Panel from './Panel';

const DummyData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.';

const Accordion = ({ indexDefaultPanel }) => {
  const [active, setActive] = useState(indexDefaultPanel);
  const changeActive = index => () => index !== active ? setActive(index) : setActive(indexDefaultPanel);
  const renderProps = (index, active) => () => index === active && <Content>{DummyData}</Content>;
  const withHOC = index => Panel => () => 
    <Panel 
      index={index} 
      active={active} 
      onClick={changeActive(index)} 
      render={renderProps(index, active)} 
      flag={index === active ? true : false }
    />;
  const Panel1 = withHOC(1)(Panel);
  const Panel2 = withHOC(2)(Panel);
  const Panel3 = withHOC(3)(Panel);
  return (
  	<ContainerAccordion>
  	  <Panel1/>
  	  <Panel2/>
  	  <Panel3/>
  	</ContainerAccordion>
  );
}

export default Accordion;

Accordion.propTypes = {
  indexDefaultPanel: PropTypes.number
}

Accordion.defaultProps = {
  indexDefaultPanel: 0
}

const ContainerAccordion = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

const Content = styled.div`
  padding: 15px;
  display: flex;
  justify-content: start;
  width: 100%;
`
