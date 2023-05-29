import { Button, Box, LinearProgress, Typography, CircularProgress } from '@mui/material';
import { JsonViewer } from '@textea/json-viewer';

import { useState } from 'react';
import { useUsers } from './use-users';

export function UserPage() {
  const [userId, setUserId] = useState('1');
  const { data: userData, loading: userDataLoading, error: userDataError, update, updating } = useUsers(userId);

  return (
    <Box className="UserPage">
      <Button variant={userId === '1' ? 'contained' : 'outlined'} onClick={() => setUserId('1')}>
        User 1
      </Button>
      <Button variant={userId === '2' ? 'contained' : 'outlined'} onClick={() => setUserId('2')}>
        User 2
      </Button>
      {userDataError ? (
        <Typography className="error">
          Something went wrong:
          <Typography className="error-contents">{userDataError.message}</Typography>
        </Typography>
      ) : userDataLoading ? (
        <LinearProgress />
      ) : (
        userData && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button onClick={() => update(new Date().valueOf())}>
              Update {updating && <CircularProgress size={16} sx={{ ml: 1 }} />}
            </Button>
            <JsonViewer value={userData} />
          </Box>
        )
      )}
    </Box>
  );
}
