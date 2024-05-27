import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import GeneralAdhd from './Pages/GeneralAdhd';
import MenAdhd from './Pages/MenAdhd';
import KidsAdhd from './Pages/KidsAdhd';
import WomenPostsPage from './Pages/WomenPostsPage';
import DeletePost from './Pages/DeletePost';
import EditPost from './Pages/EditPost';
import CreatePost from './Pages/CreatePost';
import UserProfile from './Pages/UserProfile';
import CreateProfile from './Pages/CreateProfile';
import AuthorPostsPage from './Pages/AuthorPostsPage';
import Dashboard from './Pages/Dashboard';
import MyState from './context/myState';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};



function App() {
  return (
    <Route>
      <UserProvider>
        <MyState>
          <Navbar />
          <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<AuthorPostsPage />} />
          <Route path="/editpost" element={<EditPost />} />
          <Route path="/deletepost" element={<DeletePost />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/createprofile" element={<CreateProfile />} />
          </Switch>
          </MyState>
        </UserProvider>
    </Route>
  );
}

export default App;
