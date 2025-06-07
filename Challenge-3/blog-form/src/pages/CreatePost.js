import React from 'react';
import BlogPostForm from '../components/BlogPostForm/BlogPostForm';

const CreatePost = () => {
  const handleCreate = (data) => {
    console.log('Creating post:', data);
    alert('Post created!');
  };

  return <BlogPostForm onSubmit={handleCreate} />;
};

export default CreatePost;
