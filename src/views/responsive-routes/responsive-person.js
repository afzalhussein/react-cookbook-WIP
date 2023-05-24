import { PeopleList } from './people-list';
import { Person } from './person';
import { MobileScreen, DefaultScreen } from './responsive-screens';

export const ResponsivePerson = () => {
  return (
    <div style={{ display: 'flex' }}>
      <DefaultScreen>
        <PeopleList />
        <Person />
      </DefaultScreen>
      <MobileScreen>
        <Person />
      </MobileScreen>
    </div>
  );
};
