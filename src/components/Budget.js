import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, spending } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const [errorMessage, setErrorMessage] = useState('');

  const handleBudgetChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 0 && value >= spending) {
      setNewBudget(value);
      setErrorMessage('');
    } else if (value < 0) {
      setErrorMessage('Budget should be a positive value');
    } else {
      setErrorMessage('Budget should be greater than or equal to spending');
    }
  };

  const increaseBudget = () => {
    if (newBudget + 10 <= 20000) {
      setNewBudget((prevBudget) => prevBudget + 10);
      setErrorMessage('');
    } else {
      setErrorMessage('Budget should not exceed 20,000');
    }
  };

  const decreaseBudget = () => {
    if (newBudget - 10 >= 0) {
      setNewBudget((prevBudget) => prevBudget - 10);
      setErrorMessage('');
    } else {
      setErrorMessage('Budget should be a positive value');
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £{budget}</span>
      <input
        type='number'
        step='10'
        max='20000'
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
      <button onClick={increaseBudget}>Increase</button>
      <button onClick={decreaseBudget}>Decrease</button>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </div>
  );
};

export default Budget;