import React from 'react';

import GlobalStyle from './styles/global';

import ProfileHeader from './components/ProfileHeader';
import ProfileDescription from './components/ProfileDescription';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <ProfileHeader />
      <ProfileDescription />
      <Contact />
      <GlobalStyle />
    </>
  );
};

export default App;
