import React from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSubmitRequest }) => {
	const [username, setUserName] = React.useState('');

	const handleSetUsername = (username) => {
		setUserName(username);
	};
	const handleEventKey = (e) => {
		if (e.key === 'Enter' && e.target.value) {
			handleSubmitRequest(username);
			setUserName('');
		}
	};
	return (
		<div className="search-bar">
			<input
				value={username}
				onChange={(e) => {
					handleSetUsername(e.target.value);
				}}
				onKeyPress={(e) => {
					handleEventKey(e);
				}}
				placeholder="Enter github username"
			/>
		</div>
	);
};

export default SearchBar;
