"use client"

// Importing required hooks and navigation utility
import { useState } from "react" // React Hook for state management
import { useNavigate } from "react-router-dom" // Hook for navigation (Routing)
import "./Wheel.css" // Importing styles for this component

// List of activities - Each activity is an object with properties
// Demonstrates lists, keys, and props when rendering
const activities = [
  { name: "Coloring", emoji: "🖍️", color: "#FF6B6B" },
  { name: "Dancing", emoji: "🕺", color: "#4ECDC4" },
  { name: "Listening to Music", emoji: "🎧", color: "#45B7D1" },
  { name: "Reading a Book", emoji: "📖", color: "#96CEB4" },
  { name: "Building with Blocks", emoji: "🏗️", color: "#FFEAA7" },
  { name: "Puzzle Time", emoji: "🧩", color: "#DDA0DD" },
  { name: "Stretching", emoji: "🧘‍♀️", color: "#98D8C8" },
  { name: "Drawing", emoji: "🖊️", color: "#F7DC6F" },
  { name: "Singing", emoji: "🎶", color: "#BB8FCE" },
  { name: "Deep Breathing", emoji: "💨", color: "#85C1E9" },
  { name: "Sensory Play", emoji: "👐", color: "#F8C471" },
  { name: "Quiet Time", emoji: "🤫", color: "#82E0AA" },
]

// Functional Component - Stateless by default but uses Hooks for state
function Wheel() {
  // State Management using Hooks
  const [isSpinning, setIsSpinning] = useState(false) // State for wheel spinning animation
  const [rotation, setRotation] = useState(0) // State for wheel rotation degrees
  const [currentSelection, setCurrentSelection] = useState(null) // State for selected activity
  const navigate = useNavigate() // Routing hook to move to other pages

  // Event Handler for spinning the wheel
  const spinWheel = () => {
    if (isSpinning) return // Prevent multiple spins at once

    setIsSpinning(true) // Update state - start spinning
    setCurrentSelection(null) // Reset current selection

    // Generate random rotation (multiple full rotations + random position)
    const randomRotation = 1440 + Math.random() * 1440 // Random number ensures different outcome
    const finalRotation = rotation + randomRotation
    setRotation(finalRotation) // Update rotation state

    // Logic to calculate selected activity from final wheel position
    const segmentAngle = 360 / activities.length
    const adjustedRotation = (finalRotation + 180) % 360 // Adjusted for arrow position
    const normalizedRotation = (360 - adjustedRotation) % 360
    const selectedIndex = Math.floor(normalizedRotation / segmentAngle)
    const selected = activities[selectedIndex]

    // Stop spinning after 3 seconds
    setTimeout(() => {
      setIsSpinning(false) // Wheel stops spinning
      setCurrentSelection(selected) // Save selected activity

      // Navigate to new Activity page after delay with query params
      setTimeout(() => {
        navigate(
          `/activity?name=${encodeURIComponent(selected.name)}&emoji=${encodeURIComponent(
            selected.emoji,
          )}&color=${encodeURIComponent(selected.color)}`,
        )
      }, 3000)
    }, 3000)
  }

  // JSX Layout of Wheel component
  return (
    <div className="wheel-page">
      {/* Layout decorations - purely UI */}
      <div className="wheel-decorations">
        <div className="decoration bounce decoration-1">🌟</div>
        <div className="decoration pulse decoration-2">🎈</div>
        <div className="decoration bounce decoration-3">🦄</div>
        <div className="decoration pulse decoration-4">🌈</div>
        <div className="decoration bounce decoration-5">⭐</div>
        <div className="decoration pulse decoration-6">🎪</div>
      </div>

      <div className="wheel-container">
        <h1 className="wheel-title">Spin the Fun Wheel! 🎡</h1>

        {/* Main Wheel */}
        <div className="wheel-wrapper">
          <div
            className="wheel"
            style={{
              transform: `rotate(${rotation}deg)`, // Rotation controlled by state
              transition: isSpinning ? "transform 3s cubic-bezier(0.23, 1, 0.32, 1)" : "none", // Smooth spinning animation
            }}
          >
            {/* Drawing wheel segments using SVG */}
            <svg width="400" height="400" viewBox="0 0 400 400" className="wheel-svg">
              {activities.map((activity, index) => {
                // Each segment calculated with trigonometry
                const angle = (360 / activities.length) * index - 90
                const nextAngle = (360 / activities.length) * (index + 1) - 90

                const startAngleRad = (angle * Math.PI) / 180
                const endAngleRad = (nextAngle * Math.PI) / 180

                const largeArcFlag = nextAngle - angle <= 180 ? "0" : "1"

                // Coordinates for arc drawing
                const x1 = 200 + 180 * Math.cos(startAngleRad)
                const y1 = 200 + 180 * Math.sin(startAngleRad)
                const x2 = 200 + 180 * Math.cos(endAngleRad)
                const y2 = 200 + 180 * Math.sin(endAngleRad)

                const pathData = [`M 200 200`, `L ${x1} ${y1}`, `A 180 180 0 ${largeArcFlag} 1 ${x2} ${y2}`, `Z`].join(" ")

                // Emoji placement in the middle of segment
                const emojiAngle = angle + 360 / activities.length / 2
                const emojiAngleRad = (emojiAngle * Math.PI) / 180
                const emojiX = 200 + 120 * Math.cos(emojiAngleRad)
                const emojiY = 200 + 120 * Math.sin(emojiAngleRad)

                // Returning each segment of wheel with key (important for lists)
                return (
                  <g key={index}>
                    <path d={pathData} fill={activity.color} stroke="white" strokeWidth="3" />
                    <text
                      x={emojiX}
                      y={emojiY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="32"
                      style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))" }}
                    >
                      {activity.emoji}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Center circle and pointer */}
          <div className="wheel-center">🎯</div>
          <div className="wheel-pointer"></div>
        </div>

        {/* Spin Button - Event handling for spinWheel function */}
        <button onClick={spinWheel} disabled={isSpinning} className="spin-button">
          {isSpinning ? (
            <>
              <span className="spin-icon">🔄</span>
              SPINNING...
            </>
          ) : (
            <>
              <span>▶️</span>
              SPIN THE WHEEL!
            </>
          )}
        </button>

        {/* Conditional Rendering - show only when activity is selected */}
        {currentSelection && !isSpinning && (
          <div className="selected-activity">
            <span className="selected-emoji">{currentSelection.emoji}</span>
            <div className="selected-name">{currentSelection.name}</div>
          </div>
        )}

        {/* Description - Layout/Static content */}
        <p className="wheel-description">
          Click the spin button and watch the wheel choose a fun activity for you! Each activity is designed to be
          calming and enjoyable.
        </p>
      </div>
    </div>
  )
}

export default Wheel // Exporting component for use in routing
