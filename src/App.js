import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/index";
import Chat from "./pages/Chat";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import UsersProfile from "./pages/UsersProfile";

function App() {
  return (
    <Router>
      <Navbar />
      <Categories />
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/edit-profile" exact component={EditProfile} />
          <Route path="/profile/:profileId" exact component={UsersProfile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/post" component={Post} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
