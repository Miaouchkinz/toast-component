import Footer from '../Footer';
import React from 'react';
import ToastPlayground from '../ToastPlayground';
import ToastProvider from '../ToastProvider';

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
      </ToastProvider>
      <Footer />
    </>
  );
}

export default App;
