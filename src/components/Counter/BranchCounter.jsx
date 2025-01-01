import { useState, useEffect } from "react";

const BranchCounter = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 4) {
        setCount(count + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 850); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [count]);
  return (
    <div>
      <p className="count"> {count} </p>
    </div>
  );
};

export default BranchCounter;
