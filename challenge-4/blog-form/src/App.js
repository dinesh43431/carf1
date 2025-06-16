// src/App.js
import React, { useState } from 'react';
import BlogPostForm from './components/BlogPostForm/BlogPostForm';
import BlogList from './components/BlogList';

function App() {
  const [posts, setPosts] = useState([]);

  const handleBlogPostSubmit = async (data) => {
    setPosts((prev) => [...prev, data]);
  };

  const handleDelete = (idx) => {
    setPosts((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="App">
      <BlogPostForm onSubmit={handleBlogPostSubmit} />
      <BlogList posts={posts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
