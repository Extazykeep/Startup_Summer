import React from 'react';
import './ReposPagination.css';
import Pagination from 'rc-pagination';
import { formatFirstRepoCount, formatLastRepoCount } from '../../ultis';

const ReposPagination = ({ page, reposCount, handlePageChange }) => {
	return (
		<div className="pagination-wrapper">
			<div className="pagination-items-shown">
				<span>{formatFirstRepoCount(page)}</span>-
				<span>
					{formatLastRepoCount(page) > reposCount
						? reposCount
						: formatLastRepoCount(page)}
				</span>{' '}
				of
				<span> {reposCount}</span> items
			</div>
			<Pagination
				current={page}
				total={reposCount}
				pageSize={4}
				prevIcon={'<'}
				nextIcon={'>'}
				jumpPrevIcon={'<<'}
				jumpNextIcon={'>>'}
				onChange={(current) => {
					handlePageChange(current);
				}}
				style={{ display: 'flex', listStyle: 'none', fontSize: '30px' }}
			/>
		</div>
	);
};

export default ReposPagination;
