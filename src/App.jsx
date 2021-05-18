import React, { useState } from "react";
import "./App.scss";
import Header from "./Header";
import Profile from "./Profile";
import Story from "./Story";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="containt">
        <div className="main-left">
          <Story />
        </div>
        <div className="main-right">
          <Profile />
          <div>
            <div className="friend-request">
              <p className="paragrap">Suggestions For You</p>
              <p>See All</p>
            </div>
          </div>
          <Profile />
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
