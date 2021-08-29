import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/UI/Banner/Banner';

const NotFound = () => {
  return (
    <>
      <Banner
        individual
        title="404"
        subtitle="Page Not Found"
        details={[`The requested page doesn't exist!`]}
      />
      <button>Return to {<Link to="/">homepage</Link>}</button>
    </>
  );
};

export default NotFound;
