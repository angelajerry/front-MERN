import { useState } from 'react';

export default function Counter() {
  const [result, setResult] = useState(0);
  const [input1, setOne] = useState(0);
  const [input2, setTwo] = useState(0);

  function handleSubmit() {
    setResult(Number(input1) + Number(input2));
  }

  function handleChange1(e) {
    setOne(e.target.value);
  }

  function handleChange2(e) {
    setTwo(e.target.value);
  }

  return (
    <>
      <input type="number" placeholder="Enter your first number" onChange={handleChange1} />
      <input type="number" placeholder="Enter your second number" onChange={handleChange2} />
      <button onClick={handleSubmit}>
        ADD
      </button>
      <h1>Your result is {result}</h1>
    </>
  );
}
