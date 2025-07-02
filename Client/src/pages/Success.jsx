import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Success = () => {
  // redirect to home page after 3 seconds ...[](empty dependency means it will run only once)
  const [count, setCount] = useState(3);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    // It sets a 3-second timer, and then navigates the browser to the home page ("/").
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  /* return () =>{
      clearInterval(interval);
      clearTimeout(timeout);
    };
    This is a cleanup function that clears the interval when the component unmounts, to avoid memory leaks.

 */

  return (
    <div className="flex justify-center flex-col items-center w-screen h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold"> Payment Successfull</h1>
      <Link to={"/"} className="text-xs sm:text-base">
        Go to Home ( Redirecting you in {count} seconds )
      </Link>
    </div>
  );
};

export default Success;
