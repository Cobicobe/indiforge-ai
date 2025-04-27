import React from 'react';
import WalletConnect from './components/WalletConnect';
import DatasetUpload from './components/DatasetUpload';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>IndiForge.AI MVP</h1>
      <WalletConnect />
      <DatasetUpload />
    </div>
  );
}

export default App;