import { Button, Box, LinearProgress, Typography, CircularProgress, TextField } from '@mui/material';
import { JsonViewer } from '@textea/json-viewer';

import { useState } from 'react';
import { useCancelablePosts } from './use-cancelable-posts';

export function UserPostsPage() {
  const [userId, setUserId] = useState('');

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  const { data, loading, error } = useCancelablePosts(userId);

  return (
    <Box className="UserPage">
      <TextField value={userId} onChange={handleChange} />
      {error ? (
        <Typography className="error" component="div">
          Something went wrong:
          <Typography className="error-contents">{error}</Typography>
        </Typography>
      ) : loading ? (
        <LinearProgress />
      ) : (
        data && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <JsonViewer value={data} />
          </Box>
        )
      )}
    </Box>
  );
}
