import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <a className="logo">AI Art</a>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
