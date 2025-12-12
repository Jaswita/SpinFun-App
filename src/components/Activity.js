"use client"
// Importing hooks and components from React Router for URL parameters and navigation
import { useSearchParams, Link } from "react-router-dom"
import "./Activity.css"

// Activity tips for each activity option
const activityTips = {
  Coloring: [
    "Find your favorite coloring book or print some pages",
    "Choose colors that make you feel happy",
    "Take your time and enjoy the process",
    "Try coloring while listening to calm music",
  ],
  Dancing: [
    "Put on your favorite upbeat song",
    "Move your body however feels good",
    "Try copying dance moves from videos",
    "Dance with family members or pets!",
  ],
  "Listening to Music": [
    "Choose music that matches your mood",
    "Close your eyes and focus on the sounds",
    "Try different genres - classical, pop, or nature sounds",
    "Use headphones for a more immersive experience",
  ],
  "Reading a Book": [
    "Pick a book that interests you",
    "Find a cozy, quiet spot to read",
    "Take breaks if you need them",
    "Try audiobooks if regular reading feels hard",
  ],
  "Building with Blocks": [
    "Start with a simple design",
    "Build whatever comes to mind",
    "Try following instructions or create your own",
    "Clean up can be part of the fun too!",
  ],
  "Puzzle Time": [
    "Start with the edges if it's a jigsaw puzzle",
    "Take breaks when you feel frustrated",
    "Try different types - word puzzles, sudoku, or jigsaws",
    "Ask for help if you need it",
  ],
  Stretching: [
    "Start slowly and gently",
    "Hold each stretch for 10-15 seconds",
    "Focus on your breathing",
    "Stop if anything hurts",
  ],
  Drawing: [
    "Draw anything that comes to mind",
    "Try different materials - pencils, markers, or crayons",
    "Don't worry about making it perfect",
    "Draw your feelings or favorite things",
  ],
  Singing: [
    "Sing your favorite songs",
    "Try humming if singing feels too much",
    "Make up your own songs",
    "Sing along to music or karaoke videos",
  ],
  "Deep Breathing": [
    "Sit or lie down comfortably",
    "Breathe in slowly through your nose",
    "Hold for a few seconds, then breathe out slowly",
    "Repeat 5-10 times or until you feel calmer",
  ],
  "Sensory Play": [
    "Try play dough, slime, or kinetic sand",
    "Feel different textures - soft, rough, smooth",
    "Use fidget toys or stress balls",
    "Explore with water, rice, or beans (with supervision)",
  ],
  "Quiet Time": [
    "Find a peaceful spot in your home",
    "Sit quietly and notice your surroundings",
    "Try meditation apps designed for kids",
    "Just rest and let your mind wander",
  ],
}

function Activity() {
  // Getting search parameters from URL
  const [searchParams] = useSearchParams()

  // Fetching values from URL or setting defaults
  const activityName = searchParams.get("name") || "Fun Activity"
  const activityEmoji = searchParams.get("emoji") || "🎉"
  const activityColor = searchParams.get("color") || "#FF6B6B"

  // Load activity tips based on activity name
  const tips = activityTips[activityName] || [
    "Take your time with this activity",
    "Remember to breathe and stay calm",
    "It's okay to take breaks if you need them",
    "Have fun and enjoy the moment!",
  ]

  // If no activity was selected, show this fallback message
  if (!searchParams.get("name")) {
    return (
      <div className="activity-page">
        <div className="activity-container">
          <div className="activity-header">
            <h1 className="activity-title">No Activity Selected</h1>
            <p className="activity-subtitle">Please spin the wheel first!</p>
            <Link to="/wheel" className="action-button">
              🎡 Go to Wheel
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="activity-page">
      {/* Background decorations */}
      <div className="activity-decorations">
        <div className="decoration pulse decoration-1">✨</div>
        <div className="decoration bounce decoration-2">🌟</div>
        <div className="decoration pulse decoration-3">💫</div>
        <div className="decoration bounce decoration-4">⭐</div>
      </div>

      <div className="activity-container">
        {/* Header with emoji, title and subtitle */}
        <div className="activity-header">
          <span className="activity-emoji">{activityEmoji}</span>
          <h1 className="activity-title">Time for {activityName}!</h1>
          <p className="activity-subtitle">Great choice! Here's how to make the most of this activity.</p>
        </div>

        {/* Activity tips section */}
        <div className="activity-card">
          <h2 className="tips-title">
            <span className="tips-icon">✅</span>
            Tips for {activityName}
          </h2>

          <div className="tips-grid">
            {tips.map((tip, index) => (
              <div key={index} className="tip-item">
                <div className="tip-number" style={{ backgroundColor: activityColor }}>
                  {index + 1}
                </div>
                <p className="tip-text">{tip}</p>
              </div>
            ))}
          </div>

          {/* Extra encouragement message */}
          <div className="encouragement-section">
            <h3 className="encouragement-title">
              <span>🌈</span>
              Remember
            </h3>
            <p className="encouragement-text">
              There's no right or wrong way to do this activity. The most important thing is that you feel comfortable
              and enjoy yourself. If you need to take a break or try something else, that's perfectly okay too!
            </p>
          </div>
        </div>

        {/* Buttons to spin again or go home */}
        <div className="action-buttons">
          <Link to="/wheel" className="action-button primary">
            <span>🔄</span>
            Spin Again
          </Link>

          <Link to="/" className="action-button secondary">
            <span>🏠</span>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Activity
