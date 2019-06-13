import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Panel = ({title, onClick, flag, children}) => {
  const ContainerPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    font-size: 14pt;
    font-family: Calibri;
    padding: 15px 25px 15px 25px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: ${flag ? '20px' : '-8px'};
    margin-top: ${flag ? '20px' : '10px'};
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
  `
  return <ContainerPanel>
  	<Label onClick={onClick}>{title}
  	  <Icon><FontAwesomeIcon icon={flag ? faAngleUp : faAngleDown} /></Icon>
  	</Label>
    {children ? <Content>{children}</Content> : null}
  </ContainerPanel>
}

export default Panel;

Panel.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  flag: PropTypes.oneOf([true, false]),
  children: PropTypes.any
}

const Icon = styled.div`
  color: grey;
`

const Content = styled.div`
  text-align: left;
  width: 100%;
  margin-top: 10px;
`

const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`
