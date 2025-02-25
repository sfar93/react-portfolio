// import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/Aboutme" end className={({ isActive }) => (isActive ? 'active' : '')}>About Me</a>
        </li>
        <li>
          <a href="/Portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</a>
        </li>
        <li>
          <a href="/Contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</a>
        </li>
        <li>
          <a href="/Resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
