import { Outlet, Link } from 'react-router-dom';

const Navigation = () => (
  <div className="navigation">
    <div className="titleContainer">
      <h2 className="title">Math Magicians</h2>
    </div>
    <div className="menuContainer">
      <ul className="menu">
        <li className="menuItem">
          <Link to="/">Home</Link>
        </li>
        <li className="menuItem">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="menuItem">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  </div>
);
export default Navigation;
