import React from 'react';

const Book = () => (
  <div className="card p-3 shadow">
    <p className="text-black-50">Category</p>
    <h2>Book Title</h2>
    <p className="text-primary">Author</p>
    <div>
      <button type="button" className="text-primary btn">Comment</button>
      <button type="button" className="text-primary btn">Edit</button>
      <button type="button" className="text-primary btn">Delete</button>
    </div>
  </div>
);

export default Book;
