import React from 'react';
import ReactDOM from 'react-dom/client';  

export default function Text() {
  return (
    <div>hello world</div>
  );
}

// Make sure you have the correct id in your HTML element
const container = document.getElementById('text');

  const root = ReactDOM.createRoot(container);
  root.render(<Text />);

