import React, { useState } from 'react';

const AllocationForm = () => {
  const [budget, setBudget] = useState('');
  const [spending, setSpending] = useState('');
  const [error, setError] = useState('');

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSpendingChange = (event) => {
    setSpending(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (parseInt(budget) < parseInt(spending)) {
      setError('Budget cannot be lower than spending!');
    } else {
      // Perform other actions or submit the form
      setError('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="budget">Budget:</label>
        <input type="number" id="budget" value={budget} onChange={handleBudgetChange} />

        <label htmlFor="spending">Spending:</label>
        <input type="number" id="spending" value={spending} onChange={handleSpendingChange} />

        <button type="submit">Submit</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default AllocationForm;