import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginSignUp/Login/Login';
import Register from './components/LoginSignUp/Register/Register';
import Forum from './components/Forum/Forum';
import ExpandPost from './components/Forum/ExpandPost';  // Import ExpandPost

function App() {
  const posts = [
    { id: 1, title: 'Post 1', content: 'Content of post 1', category: 'Category 1', commentCount: 5 },
    { id: 2, title: 'Post 2', content: 'Content of post 2', category: 'Category 2', commentCount: 3 },
    // Add more posts here or fetch them from a database
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum posts={posts} />} />
        <Route path="/forum/post/:postId" element={<ExpandPost posts={posts} />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
