import React from 'react';

import Loader from './components/Loader';
import Header from './components/Header';
import StateComponent from './components/StateComponent';
import MainContentLayout from './components/MainContentLayout';

import { notFoundContent, initialContent } from './constants';
import GitHubService from './services/userService';

import searchimage from './static/images/search.svg';
import userimage from './static/images/user.svg';

function App() {
	const [page, setPage] = React.useState(1);
	const [userName, setUserName] = React.useState('');
	const [userData, setUserData] = React.useState(null);
	const [userRepos, setUserRepos] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(false);

	const handlePageChange = async (current) => {
		setPage(current);
		const userRepos = await GitHubService.getUserRepositories(
			userName,
			current
		);
		setUserRepos(userRepos);
	};

	const handleSubmitRequest = React.useCallback(async (username) => {
		setIsLoading(true);
		setUserName(username);
		const userInfo = await GitHubService.getUserInfo(username);
		const userRepos = await GitHubService.getUserRepositories(username, 1);
		setPage(1);
		setIsLoading(false);
		setUserData(userInfo);
		setUserRepos(userRepos);
	}, []);

	let content = (
		<StateComponent imagesrc={searchimage} textcontent={initialContent} />
	);

	if (userData)
		content = (
			<MainContentLayout
				page={page}
				userData={userData}
				userRepos={userRepos}
				handlePageChange={handlePageChange}
			></MainContentLayout>
		);

	if (userData?.message) {
		content = (
			<StateComponent
				imagesrc={userimage}
				textcontent={notFoundContent}
			/>
		);
	}

	if (isLoading) {
		content = <Loader />;
	}

	return (
		<div className="App">
			<Header handleSubmitRequest={handleSubmitRequest}></Header>
			{content}
		</div>
	);
}

export default App;
