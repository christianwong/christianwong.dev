import React from 'react';

import GlobalStyle, {
  PlaceHolderLight,
  PlaceHolderDark,
} from './styles/global';

import ProfileHeader from './components/ProfileHeader';
import ProfileDescription from './components/ProfileDescription';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

      <Footer />

      <GlobalStyle />
    </>
  );
};

export default App;
