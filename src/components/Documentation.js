// Importing Link component from react-router-dom for navigation
// This enables routing without reloading the page
import { Link } from "react-router-dom"
// Importing component-specific CSS for styling
import "./Documentation.css"

// Stateless functional component (Documentation component does not use state or lifecycle methods)
function Documentation() {
  // Array of strings to display list of application features
  const features = [
    "Interactive spinning wheel with surprise activity suggestions",
    "Responsive design for mobile, tablet, and desktop",
    "Attractive home page with welcoming UI and accessible icons",
    "Activity list display for manual selection",
    "Simple and distraction-free layout",
    "Emoji/icons-based visual support",
    "Button to start the activity and a confirmation prompt",
    "Animated spinning wheel with smooth transitions",
  ]
  // Array of objects representing pages and their purposes
  // This is an example of using Lists in React
  // Each object contains a name and purpose for the page
  const pages = [
    { name: "Home.js", purpose: "Displays introduction, features, and about section" },
    { name: "Wheel.js", purpose: "Interactive spinning wheel for activity selection" },
    { name: "Navbar.js", purpose: "Navigation bar to switch between pages" },
    { name: "Activity.js", purpose: "Displays selected activity with detailed tips" },
    { name: "HabitFunZone.js", purpose: "Interactive games for learning good habits" },
    { name: "App.js", purpose: "Main app file that controls routing with React Router" },
  ]
  // Different concept arrays used for displaying documentation in tabular/grid format
  // These demonstrate lists, keys, and mapping of JSX
  const htmlConcepts = [
    { name: "Semantic Tags", info: "Used <section>, <div>, <button>, <h1> to structure content logically" },
    { name: "Forms & Buttons", info: "Used <button> for interactions" },
    { name: "Image & Emojis", info: "Emojis used as visual support icons" },
    { name: "Headings & Paragraphs", info: "Used <h1>, <h2>, <p> tags for textual content with proper hierarchy" },
    { name: "Lists", info: "Used arrays in JSX which render as list-like elements" },
  ]
  // Responsive HTML concepts used in the application
  const responsiveConcepts = [
    { name: "Media Queries", info: "Ensured layout adapts on screen size changes" },
    { name: "Viewport Meta Tag", info: "Used for responsive scaling" },
    { name: "Fluid Layouts", info: "Used %, vw, vh, rem units for scalability" },
    { name: "Flexible Images & Icons", info: "Icons and emojis scale with font size and layout" },
    { name: "Responsive Grids", info: "Feature cards adjust layout based on screen size" },
  ]
  // CSS concepts used in the application
  const cssConcepts = [
    { name: "Flexbox", info: "Centered content, aligned elements in rows/columns" },
    { name: "Grid Layout", info: "Displayed features in a grid" },
    { name: "Animations", info: "Used @keyframes to animate wheel spin" },
    { name: "Hover Effects", info: "Styled hover interactions on buttons" },
    { name: "Custom Classes", info: "Defined reusable styles for buttons, cards, etc." },
  ]
  // React concepts used in the application
  const reactConcepts = [
    { name: "JSX", info: "Combined HTML + JS in components" },
    { name: "useState Hook", info: "Managed spinning state, selected activity" },
    { name: "Component-Based Design", info: "Reusable components like Home, Wheel, Activity" },
    { name: "React Router", info: "Used for navigation between pages with proper URLs" },
    { name: "useNavigate Hook", info: "Programmatic navigation between routes" },
    { name: "useSearchParams Hook", info: "Handle URL query parameters for activity data" },
    { name: "Conditional Rendering", info: "Displayed result button only after wheel spin" },
  ]
  // JavaScript concepts used in the application
  const jsConcepts = [
    { name: "Arrays", info: "Used to store and map activities" },
    { name: "Math.random", info: "Generated random rotation angle for wheel" },
    { name: "setTimeout", info: "Delayed result display after wheel spin" },
    { name: "Event Handling", info: "Handled onClick and keyboard actions" },
    { name: "Object Mapping", info: "Dynamic rendering of features and activities" },
    { name: "URL Parameters", info: "Pass activity data through URL query strings" },
  ]
  // Event handlers used in the application
  const eventHandlers = [
    { name: "Mouse Click Events", info: 'onClick used for buttons like "Spin", "Let\'s Do It"' },
    { name: "Keyboard Events", info: "Can be extended to trigger spin using Enter key or arrow keys" },
    { name: "Route Changes", info: "Navigation events handled by React Router" },
  ]
  // Future features planned for the application
  const futureFeatures = [
    "Add sound effects or audio instructions for selected activities",
    "Enable saving of favorite or frequently used activities",
    "Add user authentication to personalize activities",
    "Add dark/light theme toggle",
    "Enable language selection for multilingual support",
    "Confetti or celebratory animation after spin",
    "Add more habit games and challenges",
    "Implement progress tracking across sessions",
  ]
  // References and video links related to the use case
  const references = [
    "https://reactjs.org/docs/getting-started.html",
    "https://reactrouter.com/en/main",
    "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "https://www.w3schools.com/html/",
  ]
  // Video links related to the use case
  const videoLinks = [
    "https://youtu.be/LDB4uaJ87e0",
    "https://youtu.be/jDdPwSh92mw",
    "https://youtu.be/SfvTcoEB1cQ",
    "https://youtu.be/HmBZtgxmi7c?si=b71grZIpEP4R7hMx",
    "https://youtu.be/0IlyWUX4bB8?si=Fb50l3QYjQUrEc1a",
  ]
  // Layout: Returning the documentation page structure
  return (
    <div className="documentation-page">
      <div className="documentation-container">
        {/* Header */}
        <div className="doc-header">
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
          <h1 className="doc-title">SpinFun - Lab Evaluation Documentation</h1>
          <div className="student-info">
            <p>
              <strong>Roll No:</strong> CB.SC.U4CSE23430
            </p>
            <p>
              <strong>Name:</strong> MANDUVA JASWITA
            </p>
          </div>
        </div>
        {/* Each section below uses JSX and mapping to dynamically display content */}
        {/* Features list section */}
        {/* About Use Case */}
        <section className="doc-section">
          <h2 className="section-title">About the Use Case</h2>
          <p className="section-content">
            SpinFun is a React-based web application created to support autistic children by offering a simple and fun
            way to choose indoor activities through a spinning wheel interface. The application now uses React Router
            for proper navigation, URL management, and browser history support. The aim is to reduce decision fatigue
            and provide quick, sensory-friendly activity suggestions that help regulate emotions, encourage creativity,
            and break routine boredom.
          </p>
        </section>

        {/* Pages table section */}
        {/* Targeted Users */}
        <section className="doc-section">
          <h2 className="section-title">Targeted Users</h2>
          <p className="section-content">
            SpinFun is primarily targeted at children on the autism spectrum, especially those in the early learning
            stages who benefit from visual cues, structured activities, and minimal cognitive overload. The app is
            designed for children who may struggle with traditional decision-making or who respond better to
            visual-spatial input. It also supports parents, educators, and therapists working with autistic children.
          </p>
        </section>

        {/* Features */}
        <section className="doc-section">
          <h2 className="section-title">List of Features in the Application</h2>
          <ul className="feature-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Pages */}
        <section className="doc-section">
          <h2 className="section-title">List of Pages and Their Purpose</h2>
          <div className="table-container">
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Web Page Name</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page, index) => (
                  <tr key={index}>
                    <td className="page-name">{page.name}</td>
                    <td>{page.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Sections for HTML, CSS, Responsive, React, JS, EventHandlers, FutureFeatures, References, VideoLinks */}
        {/* Each section maps over its respective array to generate content dynamically */}
        {/* Demonstrates lists, keys, and conditional rendering concepts */}
        {/* HTML Concepts */}
        <section className="doc-section">
          <h2 className="section-title">HTML Concepts Used</h2>
          <div className="concept-grid">
            {htmlConcepts.map((concept, index) => (
              <div key={index} className="concept-card">
                <h3 className="concept-name">{concept.name}</h3>
                <p className="concept-info">{concept.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsive HTML Concepts */}
        <section className="doc-section">
          <h2 className="section-title">Responsive HTML Concepts Used</h2>
          <div className="concept-grid">
            {responsiveConcepts.map((concept, index) => (
              <div key={index} className="concept-card">
                <h3 className="concept-name">{concept.name}</h3>
                <p className="concept-info">{concept.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CSS Concepts */}
        <section className="doc-section">
          <h2 className="section-title">CSS Concepts Used</h2>
          <div className="concept-grid">
            {cssConcepts.map((concept, index) => (
              <div key={index} className="concept-card">
                <h3 className="concept-name">{concept.name}</h3>
                <p className="concept-info">{concept.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* React Concepts */}
        <section className="doc-section">
          <h2 className="section-title">ReactJS Concepts Used</h2>
          <div className="concept-grid">
            {reactConcepts.map((concept, index) => (
              <div key={index} className="concept-card">
                <h3 className="concept-name">{concept.name}</h3>
                <p className="concept-info">{concept.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JavaScript Concepts */}
        <section className="doc-section">
          <h2 className="section-title">JavaScript Concepts Used</h2>
          <div className="concept-grid">
            {jsConcepts.map((concept, index) => (
              <div key={index} className="concept-card">
                <h3 className="concept-name">{concept.name}</h3>
                <p className="concept-info">{concept.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Event Handlers */}
        <section className="doc-section">
          <h2 className="section-title">Event Handlers</h2>
          <div className="concept-grid">
            {eventHandlers.map((handler, index) => (
              <div key={index} className="concept-card">
                <h3 className="concept-name">{handler.name}</h3>
                <p className="concept-info">{handler.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Future Features */}
        <section className="doc-section">
          <h2 className="section-title">Future Enhancement Features</h2>
          <ul className="feature-list">
            {futureFeatures.map((feature, index) => (
              <li key={index} className="feature-item">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Project Links */}
        <section className="doc-section">
          <h2 className="section-title">Project Links</h2>
          <div className="links-container">
            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Jaswita/SpinFun" target="_blank" rel="noopener noreferrer">
                https://github.com/Jaswita/SpinFun
              </a>
            </p>
            <p>
              <strong>Live Demo:</strong>{" "}
              <a href="https://spin-fun.vercel.app" target="_blank" rel="noopener noreferrer">
                spin-fun.vercel.app
              </a>
            </p>
          </div>
        </section>

        {/* References */}
        <section className="doc-section">
          <h2 className="section-title">References</h2>
          <ul className="reference-list">
            {references.map((ref, index) => (
              <li key={index}>
                <a href={ref} target="_blank" rel="noopener noreferrer">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Links */}
        <section className="doc-section">
          <h2 className="section-title">Video Links Related to Use Case</h2>
          <ul className="reference-list">
            {videoLinks.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Documentation