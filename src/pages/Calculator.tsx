import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value: string) => {
    if (value === '=') {
      try {
        // Note: eval() is used here for simplicity in a demo, 
        // but in a real app, use a math library for safety.
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  return (
    <div style={{ padding: '20px', maxWidth: '300px' }}>
      <h2>Pocket Calc</h2>
      <div style={{ 
        background: '#333', color: '#fff', padding: '10px', 
        textAlign: 'right', marginBottom: '10px', fontSize: '1.5rem',
        borderRadius: '4px', minHeight: '40px' 
      }}>
        {display || '0'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        {buttons.map((btn) => (
          <button 
            key={btn} 
            onClick={() => handleClick(btn)}
            style={{ padding: '15px', fontSize: '1.2rem', cursor: 'pointer' }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}