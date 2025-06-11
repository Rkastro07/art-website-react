export default function Nav({ currentPage, onNavigate }) {
  return (
    <nav className="nav">
      <a className="logo" onClick={() => onNavigate('home')}>AI Art</a>
      <div className="nav-links">
        <button onClick={() => onNavigate('home')} className={currentPage === 'home' ? 'active' : ''}>Home</button>
        <button onClick={() => onNavigate('gallery')} className={currentPage === 'gallery' ? 'active' : ''}>Gallery</button>
        <button onClick={() => onNavigate('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</button>
      </div>
    </nav>
  )
}
