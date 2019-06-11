import React from 'react';

const Panel = ({index, render, children, active, onClick}) => {
  return (
  	<div>
  	  <div onClick={onClick}>Expansion Panel {index}</div>
  	  {render(index, active)}
  	</div>
  );
}

export default Panel;