import { useEffect, useState } from 'react'
import { fetchRecords } from '../api.js'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchRecords('users').then(setUsers).catch((reason) => setError(reason.message)) }, [])
  return <section className="page-section"><div className="section-heading"><p className="eyebrow">The community</p><h1>Athletes</h1><p>Meet the people building a stronger routine together.</p></div>{error ? <p className="status error">{error}</p> : <div className="table-wrap"><table><thead><tr><th>Name</th><th>Username</th><th>Team</th></tr></thead><tbody>{users.length ? users.map((user) => <tr key={user._id || user.id}><td>{user.name || user.fullName || 'Unnamed athlete'}</td><td>{user.username || user.email || '-'}</td><td>{user.team || user.teamName || 'Unassigned'}</td></tr>) : <tr><td colSpan="3" className="empty">No athletes found.</td></tr>}</tbody></table></div>}</section>
}

export default Users