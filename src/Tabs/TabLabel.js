import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabLabel = ({ active, children, onClick }) => {
  const Label = styled.div`
    padding: 10px;
    cursor: pointer;
    color: ${active ? 'blue' : 'black'}
  `
  return <Label onClick={onClick}>{children}</Label> 
}

TabLabel.propTypes = {
  active: PropTypes.oneOf(['active', null]),
  children: PropTypes.array,
  onClick: PropTypes.func.isRequired
}

export default TabLabel;

