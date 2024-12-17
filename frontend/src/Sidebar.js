// src/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="bg-light border-end" style={{ minHeight: '100vh', padding: '20px' }}>
      <h5>Sidebar</h5>
      <ul className="list-unstyled">
        <li><a href="#item1" className="text-decoration-none">Item 1</a></li>
        <li><a href="#item2" className="text-decoration-none">Item 2</a></li>
        <li><a href="#item3" className="text-decoration-none">Item 3</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
