import React from 'react';
import styled from 'styled-components';

import ExpansionPanel from './Logic';

const DummyData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.';

const Accordion = () => 
  <AccordionContainer>
    <ExpansionPanel title="Expansion Panel 1" render={ () => <div>{DummyData}</div>} />
	<ExpansionPanel title="Expansion Panel 2" render={ () => <div>{DummyData}</div>} />
	<ExpansionPanel title="Expansion Panel 3" render={ () => <div>{DummyData}</div>} />
  </AccordionContainer>
;

export default Accordion;

const AccordionContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`
