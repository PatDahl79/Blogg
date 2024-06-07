import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import DeletePost from './Pages/DeletePost';
import EditPost from './Pages/EditPost';
import CreatePost from './Pages/CreatePost';
import UserProfile from './Pages/UserProfile';
import AuthorPostsPage from './Pages/AuthorPostsPage';
import Dashboard from './Pages/Dashboard';
import MyState from './context/myState';
import UserProvider, { UserContext } from './context/UserProvider';
import Layout from './components/Layout';
import Auth from './Pages/Auth';
import AllBlogs from './Pages/AllBlogs';
import CategoryPage from './Pages/Category';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useContext(UserContext);

  return user ? <Element {...rest} /> : <Navigate to="/login" />;
};

function App() {
  return (
    <UserProvider>
      <MyState>
        <Layout> {/* Wrap the entire app in Layout component */}
          <Router> {/* Use BrowserRouter as Router */}
            <Routes> {/* Use Routes for defining routes */}
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth/>} />
              <Route path="/author" element={<AuthorPostsPage />} />
              <Route path="/allblogs" element={<AllBlogs />} />
              {/* Define category routes */}
              <Route path="/category/general" element={<CategoryPage category="General" />} />
              <Route path="/category/men-adhd" element={<CategoryPage category="Men ADHD" />} />
              <Route path="/category/women-adhd" element={<CategoryPage category="Women ADHD" />} />
              <Route path="/category/kids-adhd" element={<CategoryPage category="Kids ADHD" />} />
              <Route path="/editpost" element={<EditPost />} />
              <Route path="/deletepost" element={<DeletePost />} />
              <Route path="/createpost" element={<CreatePost />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/private" element={<PrivateRoute element={<Dashboard />} />} />
            </Routes>
          </Router>
        </Layout>
      </MyState>
    </UserProvider>
  );
}

export default App;
