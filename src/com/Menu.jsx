import React, { useState } from 'react';
import Login from './Login';
import Front from './Front';

function Menu() {
  const [view, setView] = useState('front');
  return (
    <div className="menu">
      {view === 'front' ? <Front setView={setView} /> : <Login />}
    </div>
  );
}

export default Menu;
