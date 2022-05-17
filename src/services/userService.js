class GithubService {
	static instance = new GithubService();

	getUserInfo(username) {
		const userData = fetch(`https://api.github.com/users/${username}`)
			.then((response) => response.json())
			.then((data) => data);
		return userData;
	}
	getUserRepositories(username, page) {
		const repositoriesData = fetch(
			`https://api.github.com/users/${username}/repos?per_page=4&page=${page}`
		)
			.then((response) => response.json())
			.then((data) => data);
		return repositoriesData;
	}
}

export default GithubService.instance;
