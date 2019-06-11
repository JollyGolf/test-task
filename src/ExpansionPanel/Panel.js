import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Panel = ({index, render, active, onClick}) => {
  return (
  	<ContainerPanel>
  	  <Label onClick={onClick}>Expansion Panel {index}</Label>
  	  {render(index, active)}
  	</ContainerPanel>
  );
}

export default Panel;

Panel.propTypes = {
  index: PropTypes.number,
  render: PropTypes.func,
  active: PropTypes.number,
  onClick: PropTypes.func
}

const ContainerPanel = styled.div`
 
`

const Label = styled.div`

`