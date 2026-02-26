import React from 'react';

export default function ImageCaption({children}) {
  return (
    <div style={{ textAlign: 'center', fontStyle: 'italic' }}>
      {children}
    </div>
  );
}
