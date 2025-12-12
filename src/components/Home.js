// Importing Link from react-router-dom for navigation (used instead of props-based navigation)
// This demonstrates routing in React.
import { Link } from "react-router-dom"
import "./Home.css"

// Functional Component - stateless component since it does not use state or lifecycle methods
function Home() {
  // Example of a list (array) used for rendering UI dynamically
  const features = [
    {
      icon: "❤️",
      title: "Made with Love",
      description: "Designed specifically for autistic children with care and understanding",
    },
    {
      icon: "😊",
      title: "Fun Activities",
      description: "Engaging indoor activities to keep kids happy and entertained",
    },
    {
      icon: "⭐",
      title: "Random Selection",
      description: "Spin the wheel for surprise activities that break routine boredom",
    },
    {
      icon: "⚡",
      title: "Instant Relief",
      description: "Quick activity suggestions when feeling overwhelmed or restless",
    },
  ]

  return (
    <div className="home-page">
      <div className="home-container">
        
        {/* Layout: Hero Section containing intro and navigation buttons */}
        <div className="hero-section">
          <h1 className="hero-title">Welcome to SpinFun! 🎡</h1>
          <p className="hero-description">
            A magical spinning wheel designed to help autistic children discover fun indoor activities when they feel
            bored or overwhelmed. Just spin and let the fun begin!
          </p>

          {/* Routing: Using Link for navigation instead of event management with props */}
          <div className="hero-buttons">
            <Link to="/wheel" className="hero-button">
              🎯 Start Spinning Now!
            </Link>
            <Link to="/documentation" className="hero-button secondary">
              📚 View Documentation
            </Link>
          </div>
        </div>

        {/* Lists and Keys: Rendering feature cards by mapping over an array */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card"> {/* key is required for unique identification */}
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Layout: About Section providing extra details */}
        <div className="about-section">
          <h2 className="about-title">Why SpinFun? 🌟</h2>
          <div className="about-content">

            {/* Static content explaining app purpose */}
            <div className="about-text-container">
              <p className="about-text">
                SpinFun was created with autistic children in mind. We understand that sometimes it can be challenging
                to decide what to do when feeling bored or overwhelmed.
              </p>
              <p className="about-text">
                Our colorful spinning wheel takes the decision-making pressure away and provides instant, fun activity
                suggestions that can help regulate emotions and provide engaging sensory experiences.
              </p>
              <p className="about-text">
                Each activity is carefully selected to be calming, engaging, and easily accessible from home. Just spin
                the wheel and discover your next adventure!
              </p>
            </div>

            {/* Visual representation with text */}
            <div className="about-visual">
              <span className="about-emoji">🎨</span>
              <p className="about-tagline">Creative • Calming • Fun</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exporting the stateless component
export default Home
