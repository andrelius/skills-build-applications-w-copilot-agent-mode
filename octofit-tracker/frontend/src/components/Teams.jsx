import { useEffect, useState } from 'react'
import { fetchRecords } from '../api.js'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchRecords('teams').then(setTeams).catch((reason) => setError(reason.message)) }, [])
  return <section className="page-section"><div className="section-heading"><p className="eyebrow">Find your people</p><h1>Teams</h1><p>Groups that turn individual effort into shared momentum.</p></div>{error ? <p className="status error">{error}</p> : <div className="tile-grid">{teams.length ? teams.map((team) => <article className="data-tile" key={team._id || team.id}><span className="tile-index">TEAM</span><h2>{team.name || 'Unnamed team'}</h2><p>{team.description || 'Ready for a new challenge.'}</p><strong>{team.members?.length ?? team.memberCount ?? 0} members</strong></article>) : <p className="empty">No teams have been created yet.</p>}</div>}</section>
}

export default Teams