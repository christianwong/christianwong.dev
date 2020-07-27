import React from 'react';

import GlobalStyle, {
  PlaceHolderLight,
  PlaceHolderDark,
} from './styles/global';

import ProfileHeader from './components/ProfileHeader';
import ProfileDescription from './components/ProfileDescription';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <PlaceHolderDark>
        <ProfileHeader />
        <ProfileDescription />
      </PlaceHolderDark>

      <PlaceHolderLight>
        <Contact />
      </PlaceHolderLight>

      <GlobalStyle />
    </>
  );
};

export default App;
