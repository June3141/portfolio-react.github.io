import React from 'react';
import { Header } from './components/Header';
import { ContentsTabs } from './components/ContentsTabs';
import { Biography } from './components/Biography';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Biography />
      <ContentsTabs />
    </div>
  );
};

export default App;
