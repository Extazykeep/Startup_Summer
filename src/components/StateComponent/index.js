import React from 'react';
import './StateComponent.css';

const StateComponent = ({ imagesrc, textcontent }) => {
	return (
		<div className="state-content">
			<div className="state-component-content">
				<div className="state-component-image-wrapper">
					<img src={imagesrc} alt="" />
				</div>
				<p>{textcontent}</p>
			</div>
		</div>
	);
};

export default StateComponent;
