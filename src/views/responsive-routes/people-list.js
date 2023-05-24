import { NavLink } from 'react-router-dom';
import people from './people.json';
import './people-list.css';

export const PeopleList = () => {
  return (
    <nav className="PeopleList">
      <ul>
        {people.map((p) => (
          <li key={p.id}>
            <NavLink to={`/responsive-routes/people/${p.id}`}>{p.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
