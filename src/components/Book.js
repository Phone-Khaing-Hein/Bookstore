import React from 'react';

const Book = ({ title, category, author }) => (
  <div className="card p-3 shadow">
    <p className="text-black-50">{category}</p>
    <h2>{title}</h2>
    <p className="text-primary">{author}</p>
    <div>
      <button type="button" className="text-primary btn">Comment</button>
      <button type="button" className="text-primary btn">Edit</button>
      <button type="button" className="text-primary btn">Delete</button>
    </div>
  </div>
);

Book.propTypes = {
  title: String.isRequired,
  category: String.isRequired,
  author: String.isRequired,
};

export default Book;
