import { MobileScreen, DefaultScreen } from './responsive-screens';

import { PeopleList } from './people-list';
import { Person } from './person';

export const ResponsivePeople = () => {
  return (
    <div style={{ display: 'flex' }}>
      <DefaultScreen>
        <PeopleList />
        <Person />
      </DefaultScreen>
      <MobileScreen>
        <PeopleList />
      </MobileScreen>
    </div>
  );
};
