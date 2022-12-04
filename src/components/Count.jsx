import { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  const color = count <= 0 ? 'text-red-500' : 'text-blue-500';

  return (
    <div className="space-y-6 flex flex-col items-center justify-center">
      <div className={`text-4xl ${color}`}>{count}</div>
      <div className="flex space-x-4">
        <button
          className="count-button bg-red-500"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className="count-button bg-blue-500"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Count;
