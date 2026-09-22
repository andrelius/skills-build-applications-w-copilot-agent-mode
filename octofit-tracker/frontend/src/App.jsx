import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function Dashboard() {
  return <section className="dashboard"><p className="eyebrow">Your training workspace</p><h1>Small steps.<br /><em>Visible progress.</em></h1><p className="intro">Track the work, find your people, and keep showing up.</p><NavLink className="primary-action" to="/workouts">Explore workouts <span>-&gt;</span></NavLink><div className="dashboard-grid"><NavLink to="/activities"><strong>01</strong><span>Logbook</span><b>-&gt;</b></NavLink><NavLink to="/leaderboard"><strong>02</strong><span>Leaderboard</span><b>-&gt;</b></NavLink><NavLink to="/teams"><strong>03</strong><span>Find a team</span><b>-&gt;</b></NavLink></div></section>
}

function App() {
  const navigation = [['activities', 'Activities'], ['workouts', 'Workouts'], ['teams', 'Teams'], ['leaderboard', 'Leaderboard'], ['users', 'Athletes']]
  return <div className="app-shell"><header className="topbar"><NavLink className="brand" to="/">OCTOFIT <span>/ TRACKER</span></NavLink><nav aria-label="Main navigation">{navigation.map(([path, label]) => <NavLink key={path} to={`/${path}`} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav></header><main><Routes><Route path="/" element={<Dashboard />} /><Route path="/activities" element={<Activities />} /><Route path="/workouts" element={<Workouts />} /><Route path="/teams" element={<Teams />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/users" element={<Users />} /></Routes></main><footer>OCTOFIT TRACKER <span>Training data, made tangible.</span></footer></div>
}

export default App