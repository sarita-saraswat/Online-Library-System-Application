# Online-Library-System-Application
Online Library System
An online library system built with React and Redux that allows users to browse, add, and view details of books in various categories. This project demonstrates key React concepts like routing, state management, and dynamic rendering.

Features:

Home Page:

Displays a welcome message.
Lists book categories.
Highlights popular books with links to view details.
Navigation bar to access other pages.

Browse Books Page:

Displays all books, filtered by category or search input.
Dynamic routing for category-based filtering.
Search functionality to filter books by title or author.
Links to view detailed information for each book.

Book Details Page:

Displays detailed information about a selected book, including:
Title
Author
Description
Rating
Provides a "Back to Browse" link.

Add Book Page:

Form to add a new book to the library.
Uses Redux for state management.
Includes form validation to ensure fields are correctly filled.
Redirects to the Browse Books page after successful submission.
404 Page

A user-friendly "Page Not Found" for undefined routes.
Includes a link to return to the Home Page.
Installation Instructions
Follow these steps to run the project locally:

Prerequisites:
Ensure you have the following installed:

Node.js (LTS version recommended)
npm
Steps to Run
Clone the repository:


git clone https://github.com/sarita-saraswat/Online-Library-System-Application.git
cd online-library-system
Install dependencies:


npm install


Start the development server:


npm start


Open your browser and navigate to:


http://localhost:5173
