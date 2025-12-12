// Importing routing components from react-router-dom
import { Routes, Route } from "react-router-dom"

// Importing custom components
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Wheel from "./components/Wheel"
import Activity from "./components/Activity"
import Documentation from "./components/Documentation"
import HabitFunZone from "./components/Habits"

// Importing global styles
import "./App.css"

// App component as a Class Component
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Layout: Navbar is visible on all pages */}
        <Navbar />

        <div className="main-content">
          {/* Routes component: manages navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wheel" element={<Wheel />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/habits" element={<HabitFunZone />} />
            <Route path="/habits/:gameId" element={<HabitFunZone />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    )
  }
}

// Exporting App component as default
export default App
