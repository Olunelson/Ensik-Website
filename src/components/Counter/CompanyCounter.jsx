import { useEffect, useState } from "react";

const CompanyCounter = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 10) {
        setCount(count + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [count]);
  return (
    <div>
      <p className="count"> {count} +</p>
    </div>
  );
};

export default CompanyCounter;
