import React from 'react';

const Scroll = props => {
	return (
		<div
			style={{
				overflowY: 'scroll',
				border: '3px black solid',
				height: '500px'
			}}
		>
			{props.children}
		</div>
	);
};

export default Scroll;
