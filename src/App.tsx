import React from 'react';
import { Header } from './components/Header';
import { ContentsTabs } from './components/ContentsTabs';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ContentsTabs />
    </div>
  );
};

export default App;
