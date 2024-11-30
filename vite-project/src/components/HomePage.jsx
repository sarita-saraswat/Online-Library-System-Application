import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];
    const popularBooks = [
      { id: 1, title: '1984', author: 'George Orwell' },
      { id: 2, title: 'Dune', author: 'Frank Herbert' },
    ];
  
    return (
      <div className="home">
        <h1>Welcome to the Online Library</h1>
        <h2>Categories:</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
        <h2>Popular Books:</h2>
        <ul>
          {popularBooks.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}{' '}
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default HomePage;
