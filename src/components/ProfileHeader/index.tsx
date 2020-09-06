import React from 'react';

import { ProfilePic, Name } from './styles';

import photo from '../../assets/chris.jpg';

const ProfileHeader: React.FC = () => {
  return (
    <>
      <ProfilePic src={photo} alt="Hi, this is my pic!" />
      <Name>Christian Wong</Name>
    </>
  );
};

export default ProfileHeader;
