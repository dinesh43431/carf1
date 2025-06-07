import React from 'react';
import BlogPostForm from '../components/BlogPostForm/BlogPostForm';
import dummyPost from '../data/dummyPost';

const EditPostPage = () => {
  const handleEdit = (data) => {
    console.log('Updated post:', data);
    alert('Post updated!');
  };

  return <BlogPostForm post={dummyPost} onSubmit={handleEdit} />;
};

export default EditPostPage;
