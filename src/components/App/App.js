import Footer from '../Footer';
import React from 'react';
import ToastPlayground from '../ToastPlayground';
import ToastProvider from '../ToastProvider';
import ToastShelf from '../ToastShelf';

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
        <ToastShelf />
      </ToastProvider>
      <Footer />
    </>
  );
}

export default App;
