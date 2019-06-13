import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import Label from './TabLabel';
import Content from './TabContent';

const Context = createContext();

export const Tabs = ({ children }) => {
  const [active, setActive] = useState(1);
  const setTab = index => () => setActive(index);
  return <Context.Provider value={{active, setTab}}>{children}</Context.Provider>
}

export const withContext = type => El => ({ to, ...props}) => 
  <Context.Consumer>
    {
      ({active, setTab}) => 
        type === 'label' ? <El active={ active === props.index ? true : false } onClick={setTab} {...props} /> :
        type === 'content' && to === active ? <El {...props} /> : null 
    }
  </Context.Consumer>

export const TabLabel = withContext('label')(Label);
export const TabContent = withContext('content')(Content);

Tabs.propTypes = {
  children: PropTypes.array
}

withContext.propTypes = {
  type: PropTypes.oneOf(['label', 'content'])
}

export default Tabs;
