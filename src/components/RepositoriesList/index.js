import React from 'react';
import './RepositoriesList.css';
import ReposPagination from '../ReposPagination';
import RepositoryItem from '../RepositoryItem';
import noReposSrc from '../../static/images/noRepos.svg';
import { notFoundRepositories } from '../../constants';
import StateComponent from '../StateComponent';

const RepositoriesList = ({
	userRepos,
	handlePageChange,
	page,
	reposCount,
}) => {
	if (!userRepos.length) {
		return (
			<StateComponent
				imagesrc={noReposSrc}
				textcontent={notFoundRepositories}
			/>
		);
	}

	return (
		<div className="repositories-list-content">
			<h1>Repositories ({reposCount})</h1>
			{userRepos.map((repo) => {
				return (
					<RepositoryItem key={repo.name} {...repo}></RepositoryItem>
				);
			})}
			<ReposPagination
				reposCount={reposCount}
				page={page}
				handlePageChange={handlePageChange}
			/>
		</div>
	);
};

export default RepositoriesList;
