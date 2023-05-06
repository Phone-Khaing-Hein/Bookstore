import React from 'react';

const BookForm = () => (
  <div>
    <h3>Add a new book</h3>
    <form className="d-flex justify-content-between">
      <input type="text" placeholder="Book Title" className="form-control w-50" />
      <select className="form-select w-25">
        <option disabled selected>Category</option>
      </select>
      <button className="btn btn-primary" type="submit">Add Book</button>
    </form>
  </div>
);

export default BookForm;
