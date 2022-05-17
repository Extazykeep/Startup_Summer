import React from 'react';

const RepositoryItem = ({ html_url, description, name }) => {
	return (
		<div className="repository-item">
			<a href={html_url} target="_blank" rel="noreferrer">
				{name}
			</a>
			<p>{description || 'Repository has no description.'}</p>
		</div>
	);
};

export default RepositoryItem;
