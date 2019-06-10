import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabLabel = ({ active, children, onClick }) => {
  const Label = styled.div`
    padding: 10px 45px 10px 45px;
    cursor: pointer;
    color: ${active ? 'white' : '#badefb'}
    ${active ? 'border-bottom: 2px solid #d70757;' : null}
  `
  return <Label onClick={onClick}>{children}</Label> 
}

TabLabel.propTypes = {
  active: PropTypes.oneOf(['active', null]),
  children: PropTypes.array,
  onClick: PropTypes.func.isRequired
}

export default TabLabel;

