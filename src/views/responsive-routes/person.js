import { useParams } from 'react-router-dom';
import people from './people.json';
import './person.css';

export const Person = () => {
  const { id } = useParams();
  let person;
  if (id) person = people.find((p) => p.id === id);
  else person = people[0];

  return (
    <main className="Person">
      <h1>{person.name}</h1>
      <label htmlFor="Person-id">ID:</label>
      <div className="Person-id">{id}</div>
      <label htmlFor="Person-address">Address:</label>
      <div className="Person-address">{person.address}</div>
      <label htmlFor="Person-department">Department:</label>
      <div className="Person-department">{person.department}</div>
    </main>
  );
};
