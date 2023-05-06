import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => (
  <div>
    <Book title="Classroom Of the elite" category="Psychological thriller" author="Shogo Kinugasa" />
    <hr />
    <BookForm />
  </div>
);

export default BookList;
