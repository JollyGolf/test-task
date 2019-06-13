import React, { useState } from 'react';

import Panel from './Panel';
import PropTypes from 'prop-types';

const ExpansionPanel = ({title, render}) => {
  const [flag, setFlag] = useState(false);
  const changeFlag = flag => () => setFlag(!flag);
  return <Panel flag={flag} title={title} onClick={changeFlag(flag)}>{flag ? render() : null}</Panel>;
}

export default ExpansionPanel;

ExpansionPanel.propTypes = {
  title: PropTypes.string,
  render: PropTypes.func
}
