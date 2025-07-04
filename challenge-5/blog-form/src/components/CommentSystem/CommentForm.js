import React, { useState } from 'react';
import styles from './CommentSystem.module.css';

const CommentForm = ({ onSubmit, isLoggedIn, userName }) => {
  const [name, setName] = useState(userName || '');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!isLoggedIn && !name.trim()) || !text.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    onSubmit({ name: isLoggedIn ? userName : name, text });
    setText('');
    if (!isLoggedIn) setName('');
  };

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit} aria-label="Add a comment">
      {!isLoggedIn && (
        <div className={styles.formGroup}>
          <label htmlFor="comment-name">Name</label>
          <input
            id="comment-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className={styles.input}
            required
          />
        </div>
      )}
      <div className={styles.formGroup}>
        <label htmlFor="comment-text">Comment</label>
        <textarea
          id="comment-text"
          value={text}
          onChange={e => setText(e.target.value)}
          className={styles.textarea}
          required
          rows={3}
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <button type="submit" className={styles.submitBtn}>Post Comment</button>
    </form>
  );
};

export default CommentForm;
