import React from 'react';
import PaintingList from './components/PaintingList';
import paintings from './paintings.json';

const App = () => {
  return (
    <div>
      <h1>Главный контейнер</h1>
      <PaintingList items={paintings} />
    </div>
  );
};

export default App;
