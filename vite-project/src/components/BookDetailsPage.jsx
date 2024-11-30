import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const BookDetailsPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const books = [
    { id: 1, title: '1984', author: 'George Orwell', description: 'A dystopian novel', rating: 4.8 },
    { id: 2, title: 'Dune', author: 'Frank Herbert', description: 'A sci-fi epic', rating: 4.7 },
  ];

  const book = books.find((b) => b.id === parseInt(bookId));

  if (!book) return <div>Book not found</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>
      <button onClick={() => navigate(-1)}>Back to Browse</button>
    </div>
  );
};

export default BookDetailsPage;
