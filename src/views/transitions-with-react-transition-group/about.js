import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './about.css';
import './fade.css';

export const About = () => {
  const location = useLocation();

  return (
    <div className="About">
      <div className="About-tabs">
        <NavLink to="/transitions-with-react-transition-group/about/people" className="About-tab">
          People
        </NavLink>
        <NavLink to="/transitions-with-react-transition-group/about/offices" className="About-tab">
          Offices
        </NavLink>
      </div>
      <TransitionGroup className="About-tabContent">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
