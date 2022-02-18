import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="min-h-screen text-center flex flex-wrap justify-center items-center flex-col">
      <h1 className="font-bold text-9xl">404</h1>
      <h1 className="text-4xl mt-4">
        Sorry, the page you tried cannot be found
      </h1>
      <Link
        to="/"
        className="bg-light-beige px-8 py-4 font-bold hover:bg-vanilla ease-linear duration-300 mt-8"
      >
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
