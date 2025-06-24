import React from 'react';
import CommentSystem from './CommentSystem/CommentSystem';

function BlogList({ posts, onDelete }) {
  const [comments, setComments] = React.useState(() => posts.map(() => []));

  const handleAddComment = (postIdx, comment) => {
    setComments((prev) => {
      const updated = [...prev];
      updated[postIdx] = [
        ...updated[postIdx],
        {
          ...comment,
          date: new Date(),
          avatar: comment.name ? `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.name)}&background=random` : undefined,
        },
      ];
      return updated;
    });
  };

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
            <CommentSystem
              comments={comments[idx] || []}
              onAddComment={(comment) => handleAddComment(idx, comment)}
              isLoggedIn={false}
              userName={''}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
