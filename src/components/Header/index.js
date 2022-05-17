import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar';
import githubLogo from '../../static/images/github-logo.svg';

const Header = React.memo(({ handleSubmitRequest }) => {
	return (
		<div className="Header">
			<img src={githubLogo} alt="" />
			<SearchBar handleSubmitRequest={handleSubmitRequest}></SearchBar>
		</div>
	);
});

export default Header;
