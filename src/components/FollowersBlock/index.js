import React from 'react';
import followingSrc from '../../static/images/followingIcon.svg';
import followersSrc from '../../static/images/followersIcon.svg';
import UserFollows from './UserFollows';
import { followers, following } from '../../constants';

const FollowersBlock = React.memo(
	({ followersQuantity, followingQuantity }) => {
		return (
			<div className="followers-wrapper">
				<UserFollows
					followQuantitiy={followersQuantity}
					followIcon={followersSrc}
					followTitle={followers}
				/>
				<UserFollows
					followQuantitiy={followingQuantity}
					followIcon={followingSrc}
					followTitle={following}
				/>
			</div>
		);
	}
);
export default FollowersBlock;
