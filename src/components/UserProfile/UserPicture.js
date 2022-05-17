import React from 'react';

const UserPicture = ({ userPicture }) => {
	return (
		<div className="user-profile-image-wrapper">
			<img src={userPicture} alt="" />
		</div>
	);
};

export default UserPicture;
