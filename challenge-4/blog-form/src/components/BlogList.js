import React from 'react';

function BlogList({ posts, onDelete }) {
  if (!posts.length) return <p>No posts yet.</p>;
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx} style={{ marginBottom: 20, border: '1px solid #ccc', padding: 10 }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><b>Author:</b> {post.author} | <b>Date:</b> {post.date}</p>
            <button onClick={() => onDelete(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
