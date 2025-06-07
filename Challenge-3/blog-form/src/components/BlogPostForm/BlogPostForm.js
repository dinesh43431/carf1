import React, { useState, useEffect } from 'react';
import styles from './BlogPostForm.module.css';

const BlogPostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setAuthor(post.author);
      setDate(post.date);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title) newErrors.title = 'Required';
    if (!content) newErrors.content = 'Required';
    if (!author) newErrors.author = 'Required';
    if (!date) newErrors.date = 'Required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit({ title, content, author, date });
    }
  };

  return (
    <form className={styles.blogPostForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className={styles.error}>{errors.title}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errors.content && <p className={styles.error}>{errors.content}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && <p className={styles.error}>{errors.author}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="date">Publication Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <p className={styles.error}>{errors.date}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogPostForm;
