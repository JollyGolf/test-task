import React from 'react';
import styled from 'styled-components';

const TabLabel = ({ active, children, onClick }) => {
  const Label = styled.div`
    padding: 10px;
    cursor: pointer;
    color: ${active ? 'blue' : 'black'}
  `
  return <Label onClick={onClick}>{children}</Label> 
}

export default TabLabel;

