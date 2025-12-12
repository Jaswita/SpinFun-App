// Importing necessary modules from React Router DOM
// Link is used for client-side navigation without page reload
// useLocation is a hook to get the current active route path
import { Link, useLocation } from "react-router-dom"

// Importing external CSS for styling
import "./Navbar.css"

// Stateless functional component (no state or lifecycle methods used)
function Navbar() {
  // Hook: useLocation provides current URL path for highlighting active navigation item
  const location = useLocation()

  // List of navigation items (array of objects)
  // This is an example of using Lists in React
  // Each item has a path (route), label (text), and icon (visual element)
  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/wheel", label: "Spin Wheel", icon: "🎡" },
    { path: "/activity", label: "Activity", icon: "⭐" },
    { path: "/habits", label: "Habit Fun Zone", icon: "🌟" },
  ]

  // Layout: Returning navigation bar with logo and menu items
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo linking back to the Home page using Link (Routing) */}
        <Link to="/" className="navbar-logo">
          🎡 SpinFun
        </Link>

        {/* Rendering navigation menu dynamically using map (Lists in React) */}
        <div className="navbar-menu">
          {navItems.map(({ path, label, icon }) => (
            // Key: unique "path" used as React key (important for lists)
            <Link 
              key={path} 
              to={path} 
              // Conditional Rendering: If current path matches, add "active" class
              className={`navbar-item ${location.pathname === path ? "active" : ""}`}
            >
              {/* Displaying icon and label */}
              <span className="navbar-icon">{icon}</span>
              <span className="navbar-label">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

// Exporting Navbar component for use in other parts of the app
export default Navbar
