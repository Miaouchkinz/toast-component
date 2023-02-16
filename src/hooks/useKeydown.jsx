import React from 'react';

function useKeyDown(keyCode, callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === keyCode) {
        callback();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyCode, callback]);
}

export default useKeyDown;
