import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import UserList from "./components/userList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/login";
import Profile from "./components/profile";
import Home from "./components/home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserList />} />
      </Routes>
    </div>
  );
};

export default App;
