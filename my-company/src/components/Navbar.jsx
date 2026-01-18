import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        padding: '15px',
        backgroundColor: '#333',
      }}
    >
      <Link style={{ color: '#fff', marginRight: '15px' }} to="/">Home</Link>
      <Link style={{ color: '#fff', marginRight: '15px' }} to="/about">About</Link>
      <Link style={{ color: '#fff', marginRight: '15px' }} to="/services">Services</Link>
      <Link style={{ color: '#fff' }} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
