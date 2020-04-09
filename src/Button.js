import React from 'react';

const Button = ({ go }) => {
  return (
    <div className ='pa5 f3 dib'>
      <button 
        className="pa3 bg-light-blue ba bw2 b--light-red" 
        onClick={go}>
        Poke ball, go!
      </button>
    </div>
  );
}

export default Button;