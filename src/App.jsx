// src/App.jsx
import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import HomePage from './components/HomePage';
// import SocialIcons from './components/SocialIcons';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      

      
      <HomePage/>
    </div>
  );
}

export default App;
