import React from 'react';
import UserPicture from './UserPicture';
import './UserProfile.css';
import FollowersBlock from '../FollowersBlock';

const UserProfile = React.memo(
	({ login, avatar_url, html_url, name, followers, following }) => {
		return (
			<div className="user-profile-content">
				<UserPicture userPicture={avatar_url} />
				<h1>{name ? name : ''}</h1>
				<a href={html_url} target="_blank" rel="noreferrer">
					{login}
				</a>
				<FollowersBlock
					followersQuantity={followers}
					followingQuantity={following}
				/>
			</div>
		);
	}
);

export default UserProfile;
