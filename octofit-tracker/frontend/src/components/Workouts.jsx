import { useEffect, useState } from 'react'
import { fetchRecords } from '../api.js'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchRecords('workouts').then(setWorkouts).catch((reason) => setError(reason.message)) }, [])
  return <section className="page-section"><div className="section-heading"><p className="eyebrow">Built for consistency</p><h1>Workouts</h1><p>Practical sessions to keep your next move within reach.</p></div>{error ? <p className="status error">{error}</p> : <div className="tile-grid">{workouts.length ? workouts.map((workout) => <article className="data-tile" key={workout._id || workout.id}><span className="tile-index">WORKOUT</span><h2>{workout.name || workout.title || 'Untitled workout'}</h2><p>{workout.description || workout.type || 'A focused session for today.'}</p><strong>{workout.duration ? `${workout.duration} minutes` : 'Flexible pace'}</strong></article>) : <p className="empty">No workouts have been added yet.</p>}</div>}</section>
}

export default Workouts