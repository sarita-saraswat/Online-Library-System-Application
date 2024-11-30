import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import '../styles/BrowseBooksPage.css';

const BrowseBooksPage = () => {
  const { category } = useParams(); // Get category from URL (if available)
  const books = useSelector((state) => state.books.books); // Fetch books from Redux store
  const [search, setSearch] = useState('');

  // Filter books by category and search query
  const filteredBooks = books
    .filter((book) => (category ? book.category === category : true)) // Match category if specified
    .filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="browse-books">
      <h2>Browse Books {category ? `in "${category}"` : ''}</h2>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}{' '}
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BrowseBooksPage;
