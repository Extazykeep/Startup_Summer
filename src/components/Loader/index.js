import React from 'react';
import './Spinner.css';

const PageSpinner = () => {
	return (
		<div className="spinner-container">
			<div className="spinnerClock">
				<div className="spinnerClock__clock"></div>
				<div className="spinnerClock__secHand"></div>
			</div>
		</div>
	);
};

export default PageSpinner;
