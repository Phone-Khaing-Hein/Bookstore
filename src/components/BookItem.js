import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({
  item_id, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className="book-panel"
      id={item_id}
    >
      <div className="book-card">
        <div className="book-heading">
          <small className="school-of">{category}</small>
          <h3 className="title">{title}</h3>
          <span className="author">{author}</span>
        </div>
        <div className="actions">
          <button
            type="button"
            className="comments"
          >
            Comment
          </button>
          <button
            type="button"
            className="remove"
            onClick={(e) => {
              e.preventDefault();
              dispatch(removeBook(item_id));
            }}
          >
            Remove
          </button>
          <button
            type="button"
            className="edit"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="percentage-container">
        <div className="oval border" />
        <div className="percentage-complete">
          <span className="percentage">64%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div>
        <div className="current-chapter">Current Chapter</div>
        <div className="chapter">Chapter 7</div>
        <button
          className="update-progress"
          type="button"
        >
          Update Progress
        </button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
