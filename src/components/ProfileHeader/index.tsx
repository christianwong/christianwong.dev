import React from 'react';

import logo from '../../assets/chris.png';

const ProfileHeader: React.FC = () => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Christian Wong</h1>
    </>
  );
};

export default ProfileHeader;
