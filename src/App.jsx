import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import SocialNetwork from './components/SocialNetwork';
import ReleasePages from './components/ReleasePages';
import DemoImport from './components/DemoImport';
import ArtistPages from './components/ArtistPages';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <HomePage />
      <SocialNetwork />
      <ReleasePages />
      <DemoImport />
      <ArtistPages />
    </>

  );
}

export default App;