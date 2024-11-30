import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <Link to="/">Go Back to Home</Link>
  </div>
);

export default NotFoundPage;
