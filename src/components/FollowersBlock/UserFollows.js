import React from 'react';
import { formatThousands } from '../../ultis';

const UserFollows = ({ followQuantitiy, followIcon, followTitle }) => {
	const formatedQuantitiy = formatThousands(followQuantitiy);
	return (
		<div className="followers-item">
			<div className="followers-wrapper-icon">
				<img src={followIcon} alt="" />
			</div>
			<p>
				{formatedQuantitiy} {followTitle}
			</p>
		</div>
	);
};

export default UserFollows;
