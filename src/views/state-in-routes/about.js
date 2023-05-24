import { NavLink, Outlet } from 'react-router-dom';
import './about.css';

export const About = () => (
  <div className="About">
    <div className="About-tabs">
      <NavLink to="/state-in-routes/about/people" className="About-tab">
        People
      </NavLink>
      <NavLink to="/state-in-routes/about/offices" className="About-tab">
        Offices
      </NavLink>
    </div>
    <Outlet />
  </div>
);
