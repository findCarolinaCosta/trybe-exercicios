// src/TrafficSignal.jsx

import React from 'react';
import Context from './Context';
import redSignal from './images/redSignal.jpeg'
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  return (
    <Context.Consumer>
      {({ signalColor:{ color }, changeSignal }) => (
        <div>
        <div className="button-container">
          <button onClick={() => changeSignal('red')} type="button">
            Red
          </button>
          <button onClick={() => changeSignal('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => changeSignal('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={renderSignal(color)} alt="Traffic Signal" />
      </div>
      )}
    </Context.Consumer>
  );
};

export default TrafficSignal;
