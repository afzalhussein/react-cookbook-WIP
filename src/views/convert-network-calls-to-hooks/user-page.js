import './user-page.css';
import { useState } from 'react';
import { useUsers } from './use-users';

export function UserPage() {
  const [userId, setUserId] = useState('1');
  const { data: userData, loading: userDataLoading, error: userDataError } = useUsers(userId);

  return (
    <div className="UserPage">
      <button onClick={() => setUserId('1')}>User 1</button>
      <button onClick={() => setUserId('2')}>User 2</button>
      {userDataError ? (
        <div className="error">
          Something went wrong:
          <div className="error-contents">{userDataError.message}</div>
        </div>
      ) : userDataLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        userData && <dl>{JSON.stringify(userData)}</dl>
      )}
    </div>
  );
}
