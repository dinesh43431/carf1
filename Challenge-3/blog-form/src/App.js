import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import EditPostPage from './pages/EditPostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/edit" element={<EditPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
