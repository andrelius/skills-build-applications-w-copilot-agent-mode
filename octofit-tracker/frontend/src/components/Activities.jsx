import { useEffect, useState } from 'react'
import { fetchRecords } from '../api.js'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchRecords('activities').then(setActivities).catch((reason) => setError(reason.message)) }, [])
  return <section className="page-section"><div className="section-heading"><p className="eyebrow">Movement log</p><h1>Activities</h1><p>Recent training sessions across the OctoFit community.</p></div>{error ? <p className="status error">{error}</p> : <div className="table-wrap"><table><thead><tr><th>Activity</th><th>Type</th><th>Duration</th><th>Points</th></tr></thead><tbody>{activities.length ? activities.map((activity) => <tr key={activity._id || activity.id}><td>{activity.name || activity.title || 'Untitled session'}</td><td>{activity.type || activity.category || '-'}</td><td>{activity.duration ? `${activity.duration} min` : '-'}</td><td>{activity.points ?? '-'}</td></tr>) : <tr><td colSpan="4" className="empty">No activities recorded yet.</td></tr>}</tbody></table></div>}</section>
}

export default Activities