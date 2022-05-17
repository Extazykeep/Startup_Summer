import React from 'react';
import './MainContent.css';
import UserProfile from '../UserProfile';
import ReposList from '../RepositoriesList';

const MainContentLayout = ({ page, userData, userRepos, handlePageChange }) => {
	return (
		<div className="main-content-wrapper">
			<UserProfile {...userData} />
			<ReposList
				page={page}
				userRepos={userRepos}
				reposCount={userData.public_repos}
				handlePageChange={handlePageChange}
			/>
		</div>
	);
};

export default MainContentLayout;
