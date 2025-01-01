import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 50) {
        setCount(count + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 50); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div>
      <p className="count"> {count} +</p>
    </div>
  );
}

export default Counter;
