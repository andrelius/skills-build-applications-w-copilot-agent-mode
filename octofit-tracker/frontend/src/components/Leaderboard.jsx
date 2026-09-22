import { useEffect, useState } from 'react'
import { fetchRecords } from '../api.js'

function Leaderboard() {
  const [leaders, setLeaders] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchRecords('leaderboard').then(setLeaders).catch((reason) => setError(reason.message)) }, [])
  return <section className="page-section"><div className="section-heading"><p className="eyebrow">Team pulse</p><h1>Leaderboard</h1><p>See who is setting the pace this season.</p></div>{error ? <p className="status error">{error}</p> : <div className="leader-list">{leaders.length ? leaders.map((leader, index) => <div className="leader-row" key={leader._id || leader.id || index}><strong>0{index + 1}</strong><span>{leader.username || leader.user || leader.name || 'Unknown athlete'}</span><b>{leader.points ?? leader.score ?? 0} pts</b></div>) : <p className="empty">The leaderboard is waiting for its first scores.</p>}</div>}</section>
}

export default Leaderboard