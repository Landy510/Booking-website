import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className="container text-[0.5rem] sm:text-[1rem] text-grey">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Index</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
