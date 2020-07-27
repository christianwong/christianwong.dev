import React from 'react';

import ProfileHeader from './components/ProfileHeader';
import ProfileDescription from './components/ProfileDescription';
import Contact from './components/Contact';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileHeader />
        <ProfileDescription />
        <Contact />
      </header>
    </div>
  );
};

export default App;
