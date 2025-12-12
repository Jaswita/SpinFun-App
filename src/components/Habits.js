"use client"
// Importing necessary hooks and components from React Router
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import "./Habits.css"
// Importing individual games
// components for each mini-game
function HabitFunZone() {
  const { gameId } = useParams()
  const navigate = useNavigate()
  const [stars, setStars] = useState(0)
  const [completedGames, setCompletedGames] = useState(new Set())

  const games = [
    {
      id: "cleanup",
      name: "Clean-Up Challenge",
      icon: "🧸",
      hint: "Put toys back in the box",
      description: "Help organize toys by clicking on them!",
    },
    {
      id: "food",
      name: "Food Basket Game",
      icon: "🥦",
      hint: "Choose healthy food",
      description: "Sort healthy and unhealthy foods into correct baskets!",
    },
    {
      id: "energy",
      name: "Switch Off to Save",
      icon: "💡",
      hint: "Turn off extra lights & fans",
      description: "Save energy by turning off unused lights!",
    },
    {
      id: "hygiene",
      name: "Germ Buster",
      icon: "🧼",
      hint: "Wash away the germs",
      description: "Follow the steps to wash your hands properly!",
    },
    {
      id: "safety",
      name: "Traffic Signal Fun",
      icon: "🚦",
      hint: "Stop at red, go at green",
      description: "Help the car follow traffic rules!",
    },
  ]
  // Load completed games from localStorage on initial render
  const completeGame = (completedGameId) => {
    if (!completedGames.has(completedGameId)) {
      setStars(stars + 1)
      setCompletedGames(new Set([...completedGames, completedGameId]))
    }
    navigate("/habits")
  }

  const renderGameMenu = () => (
    <div className="game-menu">
      <div className="stars-display">
        <h3>🌟 You have earned {stars} stars! 🌟</h3>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <Link
            key={game.id}
            to={`/habits/${game.id}`}
            className={`game-card ${completedGames.has(game.id) ? "completed" : ""}`}
          >
            <div className="game-icon">{game.icon}</div>
            <h3 className="game-name">{game.name}</h3>
            <p className="game-hint">"{game.hint}"</p>
            {completedGames.has(game.id) && <div className="completion-badge">✅</div>}
          </Link>
        ))}
      </div>
    </div>
  )

  const renderGame = () => {
    switch (gameId) {
      case "cleanup":
        return <CleanUpGame onComplete={() => completeGame("cleanup")} onBack={() => navigate("/habits")} />
      case "food":
        return <FoodBasketGame onComplete={() => completeGame("food")} onBack={() => navigate("/habits")} />
      case "energy":
        return <EnergySaveGame onComplete={() => completeGame("energy")} onBack={() => navigate("/habits")} />
      case "hygiene":
        return <GermBusterGame onComplete={() => completeGame("hygiene")} onBack={() => navigate("/habits")} />
      case "safety":
        return <TrafficGame onComplete={() => completeGame("safety")} onBack={() => navigate("/habits")} />
      default:
        return renderGameMenu()
    }
  }

  return (
    <div className="habit-fun-zone">
      <div className="habit-container">
        {/* Header */}
        <div className="habit-header">
          <div className="header-navigation">
            <Link to="/" className="back-to-home-btn">
              🏠 Back to Home
            </Link>
          </div>
          <h1 className="habit-title">🌟 Habit Fun Zone – Learn Good Habits by Playing 🌟</h1>
          <p className="habit-subtitle">Play fun games and learn amazing habits!</p>
        </div>

        {/* Game Area */}
        <div className="game-area">{renderGame()}</div>
      </div>
    </div>
  )
}

// Clean-Up Challenge Game
function CleanUpGame({ onComplete, onBack }) {
  const [toys, setToys] = useState([
    { id: 1, emoji: "🧸", collected: false, x: 20, y: 30 },
    { id: 2, emoji: "🪀", collected: false, x: 60, y: 50 },
    { id: 3, emoji: "🚂", collected: false, x: 80, y: 20 },
    { id: 4, emoji: "⚽", collected: false, x: 40, y: 70 },
    { id: 5, emoji: "🎮", collected: false, x: 70, y: 80 },
  ])

  const collectToy = (toyId) => {
    setToys(toys.map((toy) => (toy.id === toyId ? { ...toy, collected: true } : toy)))
  }

  const allCollected = toys.every((toy) => toy.collected)

  return (
    <div className="mini-game cleanup-game">
      <div className="game-header">
        <button className="game-back-btn" onClick={onBack}>
          ← Back to Games
        </button>
        <h2>🧸 Clean-Up Challenge</h2>
        <p>Click on the toys to put them in the toy box!</p>
      </div>

      <div className="game-playground">
        <div className="toy-box">
          <div className="box-icon">📦</div>
          <p>Toy Box</p>
          <div className="collected-count">
            {toys.filter((toy) => toy.collected).length} / {toys.length}
          </div>
        </div>

        <div className="play-area">
          {toys.map(
            (toy) =>
              !toy.collected && (
                <div
                  key={toy.id}
                  className="toy-item"
                  style={{ left: `${toy.x}%`, top: `${toy.y}%` }}
                  onClick={() => collectToy(toy.id)}
                >
                  {toy.emoji}
                </div>
              ),
          )}
        </div>
      </div>

      {allCollected && (
        <div className="success-message">
          <h3>🎉 Great job! All toys are organized!</h3>
          <button className="complete-btn" onClick={onComplete}>
            Get Your Star! ⭐
          </button>
        </div>
      )}
    </div>
  )
}

// Food Basket Game
function FoodBasketGame({ onComplete, onBack }) {
  const [foods] = useState([
    { id: 1, emoji: "🍎", type: "healthy", name: "Apple" },
    { id: 2, emoji: "🥦", type: "healthy", name: "Broccoli" },
    { id: 3, emoji: "🍩", type: "unhealthy", name: "Donut" },
    { id: 4, emoji: "🍟", type: "unhealthy", name: "Fries" },
    { id: 5, emoji: "🥕", type: "healthy", name: "Carrot" },
    { id: 6, emoji: "🍔", type: "unhealthy", name: "Burger" },
  ])

  const [healthyBasket, setHealthyBasket] = useState([])
  const [unhealthyBasket, setUnhealthyBasket] = useState([])
  const [currentFood, setCurrentFood] = useState(0)

  const sortFood = (basket) => {
    const food = foods[currentFood]
    const isCorrect =
      (basket === "healthy" && food.type === "healthy") || (basket === "unhealthy" && food.type === "unhealthy")

    if (isCorrect) {
      if (basket === "healthy") {
        setHealthyBasket([...healthyBasket, food])
      } else {
        setUnhealthyBasket([...unhealthyBasket, food])
      }
      setCurrentFood(currentFood + 1)
    }
  }

  const gameComplete = currentFood >= foods.length

  return (
    <div className="mini-game food-game">
      <div className="game-header">
        <button className="game-back-btn" onClick={onBack}>
          ← Back to Games
        </button>
        <h2>🥦 Food Basket Game</h2>
        <p>Sort the foods into healthy and unhealthy baskets!</p>
      </div>

      {!gameComplete ? (
        <div className="food-sorting">
          <div className="current-food">
            <h3>Sort this food:</h3>
            <div className="food-display">
              <span className="food-emoji">{foods[currentFood].emoji}</span>
              <p>{foods[currentFood].name}</p>
            </div>
          </div>

          <div className="baskets">
            <div className="basket healthy-basket" onClick={() => sortFood("healthy")}>
              <h4>🥗 Healthy Foods</h4>
              <div className="basket-items">
                {healthyBasket.map((food) => (
                  <span key={food.id} className="basket-food">
                    {food.emoji}
                  </span>
                ))}
              </div>
            </div>

            <div className="basket unhealthy-basket" onClick={() => sortFood("unhealthy")}>
              <h4>🍟 Unhealthy Foods</h4>
              <div className="basket-items">
                {unhealthyBasket.map((food) => (
                  <span key={food.id} className="basket-food">
                    {food.emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="success-message">
          <h3>🎉 Excellent! You sorted all the foods correctly!</h3>
          <button className="complete-btn" onClick={onComplete}>
            Get Your Star! ⭐
          </button>
        </div>
      )}
    </div>
  )
}

// Energy Save Game - Updated
function EnergySaveGame({ onComplete, onBack }) {
  const [lights, setLights] = useState([
    { id: 1, on: true, room: "Living Room" },
    { id: 2, on: true, room: "Bedroom" },
    { id: 3, on: true, room: "Kitchen" },
    { id: 4, on: true, room: "Bathroom" },
    { id: 5, on: true, room: "Study Room" },
  ])

  const [score, setScore] = useState(0)

  const toggleLight = (lightId) => {
    setLights(
      lights.map((light) => {
        if (light.id === lightId) {
          if (light.on) {
            // Turning off - add points
            setScore(score + 10)
          } else {
            // Turning on - subtract points
            setScore(Math.max(0, score - 5))
          }
          return { ...light, on: !light.on }
        }
        return light
      }),
    )
  }

  const allLightsOff = lights.every((light) => !light.on)
  const lightsOnCount = lights.filter((light) => light.on).length

  return (
    <div className="mini-game energy-game">
      <div className="game-header">
        <button className="game-back-btn" onClick={onBack}>
          ← Back to Games
        </button>
        <h2>💡 Switch Off to Save</h2>
        <p>Turn off all the lights to save energy! Click any light to toggle it on/off.</p>
        <div className="game-stats">
          <div className="score">Score: {score} points</div>
          <div className="lights-status">
            Lights On: {lightsOnCount} / {lights.length}
          </div>
        </div>
      </div>

      <div className="house-layout">
        {lights.map((light) => (
          <div key={light.id} className="room">
            <h4>{light.room}</h4>
            <div className={`light-bulb ${light.on ? "on" : "off"}`} onClick={() => toggleLight(light.id)}>
              {light.on ? "💡" : "🔘"}
            </div>
            <p className="light-status">{light.on ? "ON" : "OFF"}</p>
          </div>
        ))}
      </div>

      <div className="energy-tips">
        <p>
          💡 <strong>Tip:</strong> You can turn lights back on if needed, but save energy by keeping only necessary
          lights on!
        </p>
      </div>

      {allLightsOff && (
        <div className="success-message">
          <h3>🎉 Amazing! You saved lots of energy!</h3>
          <p>All lights are off! Final Score: {score} points</p>
          <button className="complete-btn" onClick={onComplete}>
            Get Your Star! ⭐
          </button>
        </div>
      )}
    </div>
  )
}

// Germ Buster Game
function GermBusterGame({ onComplete, onBack }) {
  const [step, setStep] = useState(0)
  const steps = [
    { id: 1, text: "Turn on the water", emoji: "🚰", action: "Turn On Water" },
    { id: 2, text: "Apply soap on hands", emoji: "🧼", action: "Apply Soap" },
    { id: 3, text: "Rub hands together for 20 seconds", emoji: "👐", action: "Rub Hands" },
    { id: 4, text: "Rinse with clean water", emoji: "💧", action: "Rinse Hands" },
    { id: 5, text: "Dry with clean towel", emoji: "🏺", action: "Dry Hands" },
  ]

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    }
  }

  const gameComplete = step >= steps.length - 1

  return (
    <div className="mini-game hygiene-game">
      <div className="game-header">
        <button className="game-back-btn" onClick={onBack}>
          ← Back to Games
        </button>
        <h2>🧼 Germ Buster</h2>
        <p>Follow the steps to wash your hands properly!</p>
      </div>

      <div className="hand-washing-steps">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((step + 1) / steps.length) * 100}%` }}></div>
        </div>

        <div className="current-step">
          <div className="step-emoji">{steps[step].emoji}</div>
          <h3>
            Step {step + 1}: {steps[step].text}
          </h3>

          {!gameComplete ? (
            <button className="step-button" onClick={nextStep}>
              {steps[step].action}
            </button>
          ) : (
            <div className="success-message">
              <h3>🎉 Perfect! Your hands are now germ-free!</h3>
              <button className="complete-btn" onClick={onComplete}>
                Get Your Star! ⭐
              </button>
            </div>
          )}
        </div>

        <div className="steps-preview">
          {steps.map((s, index) => (
            <div key={s.id} className={`step-preview ${index <= step ? "completed" : ""}`}>
              {s.emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Traffic Signal Game - Fixed version
function TrafficGame({ onComplete, onBack }) {
  const [signal, setSignal] = useState("red")
  const [carPosition, setCarPosition] = useState(0)
  const [score, setScore] = useState(0)
  const [gameMessage, setGameMessage] = useState("Wait for green light!")
  const [isGameActive, setIsGameActive] = useState(true)

  // Auto-change signals every 3 seconds
  useEffect(() => {
    if (!isGameActive) return

    const signals = ["red", "yellow", "green"]

    const interval = setInterval(() => {
      setSignal((currentSignal) => {
        const currentIndex = signals.indexOf(currentSignal)
        const nextIndex = (currentIndex + 1) % signals.length
        const nextSignal = signals[nextIndex]

        if (nextSignal === "green") {
          setGameMessage("Green light! You can go! 🚗")
        } else if (nextSignal === "yellow") {
          setGameMessage("Yellow light! Get ready to stop! ⚠️")
        } else {
          setGameMessage("STOP! Red light means STOP! 🛑")
        }

        return nextSignal
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isGameActive])

  const moveCar = () => {
    if (signal === "green") {
      setCarPosition(carPosition + 15)
      setScore(score + 10)
      setGameMessage("Good job! Moving safely! 🚗💨")
    } else if (signal === "yellow") {
      setGameMessage("Careful! Yellow means prepare to stop! ⚠️")
      setScore(Math.max(0, score - 2))
    } else {
      setGameMessage("STOP! Red light means STOP! 🛑")
      setScore(Math.max(0, score - 5))
    }
  }

  const resetGame = () => {
    setCarPosition(0)
    setScore(0)
    setSignal("red")
    setGameMessage("Wait for green light!")
  }

  const gameComplete = carPosition >= 100

  useEffect(() => {
    if (gameComplete) {
      setIsGameActive(false)
    }
  }, [gameComplete])

  return (
    <div className="mini-game traffic-game">
      <div className="game-header">
        <button className="game-back-btn" onClick={onBack}>
          ← Back to Games
        </button>
        <h2>🚦 Traffic Signal Fun</h2>
        <p>Watch the signals change automatically! Move only on GREEN light!</p>
        <div className="game-stats">
          <div className="score">Score: {score} points</div>
          <div className="progress">Progress: {Math.min(100, carPosition)}%</div>
        </div>
      </div>

      {!gameComplete ? (
        <div className="traffic-scene">
          <div className="traffic-light">
            <div className={`light red ${signal === "red" ? "active" : ""}`}></div>
            <div className={`light yellow ${signal === "yellow" ? "active" : ""}`}></div>
            <div className={`light green ${signal === "green" ? "active" : ""}`}></div>
          </div>

          <div className="signal-timer">
            <p>🕐 Signals change every 3 seconds automatically!</p>
          </div>

          <div className="road">
            <div className="car" style={{ left: `${Math.min(carPosition, 90)}%` }}>
              🚗
            </div>
            <div className="finish-line">🏁</div>
          </div>

          <div className="game-controls">
            <p className="game-message">{gameMessage}</p>
            <div className="control-buttons">
              <button className="control-btn move-btn" onClick={moveCar}>
                🚗 Move Car
              </button>
              <button className="control-btn reset-btn" onClick={resetGame}>
                🔄 Reset Game
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="success-message">
          <h3>🎉 Excellent! You followed all traffic rules!</h3>
          <p>You reached the finish line safely! Final Score: {score} points</p>
          <button className="complete-btn" onClick={onComplete}>
            Get Your Star! ⭐
          </button>
        </div>
      )}
    </div>
  )
}

export default HabitFunZone
