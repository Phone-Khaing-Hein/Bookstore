import React, { useState } from 'react';

const BookForm = () => {
  const [title, setTitle] = useState('');

  return (
    <div>
      <h3>Add a new book</h3>
      <form className="d-flex justify-content-between">
        <input type="text" placeholder="Book Title" className="form-control w-50" value={title} onChange={(e) => setTitle(e.target.value)} />
        <select className="form-select w-25">
          <option disabled selected>Category</option>
        </select>
        <button className="btn btn-primary" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
