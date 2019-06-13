import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ children }) => {
  return <div>{children}</div> 
}

TabContent.propTypes = {
  children: PropTypes.any
}


export default TabContent;
