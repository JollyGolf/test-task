import React from 'react';
import styled from 'styled-components';

const TabLabel = ({ active, children, onClick }) => <Label className={active ? 'active' : ''} onClick={onClick}>{children}</Label>;

export default TabLabel;

const Label = styled.div`
  padding: 10px;
  cursor: pointer;
`