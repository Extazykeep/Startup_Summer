export const formatThousands = (number) => {
	return number > 1000 ? (number / 1000).toFixed(1) + 'k' : number;
};
export const formatFirstRepoCount = (page) => {
	return (page - 1) * 4 + 1;
};
export const formatLastRepoCount = (page) => {
	return (page - 1) * 4 + 4;
};
