// import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/aboutme" end className={({ isActive }) => (isActive ? 'active' : '')}>About Me</a>
        </li>
        <li>
          <a href="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</a>
        </li>
        <li>
          <a href="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</a>
        </li>
        <li>
          <a href="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
