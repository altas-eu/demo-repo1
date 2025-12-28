import { useState } from 'react'
import './App.css'

function App() {
  const [rating, setRating] = useState<number | null>(null)
  const [feedback, setFeedback] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container">
        <div className="success-message">
          <svg width="48" height="48" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.78 6.22-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.97-3.97a.75.75 0 1 1 1.06 1.06z" fill="var(--color-success)"/>
          </svg>
          <h1>Thank You!</h1>
          <p>Your feedback has been successfully submitted.</p>
          <button onClick={() => {
            setRating(null)
            setFeedback('')
            setSubmitted(false)
          }}>
            Start New Survey
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <header className="header">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" fill="var(--color-accent-primary)"/>
          <path d="M16 8v8l5 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <h1>User Survey</h1>
      </header>

      <form onSubmit={handleSubmit} className="survey-form">
        <div className="form-section">
          <label className="form-label">
            How satisfied are you with our product?
          </label>
          <div className="rating-buttons">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`rating-button ${rating === value ? 'active' : ''}`}
                onClick={() => setRating(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="rating-labels">
            <span>Very dissatisfied</span>
            <span>Very satisfied</span>
          </div>
        </div>

        <div className="form-section">
          <label htmlFor="feedback" className="form-label">
            Do you have any additional comments?
          </label>
          <textarea
            id="feedback"
            className="textarea"
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback helps us improve..."
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={rating === null}
        >
          Submit Survey
        </button>
      </form>

      <footer className="footer">
        <p>Inspired by <a href="https://acorn.firefox.com" target="_blank">Firefox Acorn Design System</a></p>
      </footer>
    </div>
  )
}

export default App
