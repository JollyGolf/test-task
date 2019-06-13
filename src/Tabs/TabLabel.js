import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabLabel = ({ active, index, children, onClick}) => {
  const Label = styled.div`
    padding: 10px 45px 10px 45px;
    cursor: pointer;
    color: ${active ? 'white' : '#badefb'};
    ${active && 'border-bottom: 2px solid #d70757;'}
  `
  return <Label onClick={onClick(index)}>{children}</Label> 
}

TabLabel.propTypes = {
  active: PropTypes.oneOf([true, false]),
  children: PropTypes.any,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default TabLabel;
