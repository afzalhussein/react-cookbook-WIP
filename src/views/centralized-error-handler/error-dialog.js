import { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export const ErrorDialog = ({ error, onClose, title }) => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [stringError, setStringError] = useState();

  useEffect(() => {
    setStringError(error ? (typeof error === 'string' ? error : JSON.stringify(error, null, 2)) : null);
  }, [error]);

  useEffect(() => {
    if (stringError) {
      const lines = stringError.split('\n');
      setHeight(lines.length);
      setWidth(lines.reduce((a, b) => (a < b ? b : a), 100));
    }
  }, [stringError]);

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={error}>
      <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <Typography>
          Something bad happened. The details of the error are below. Please copy them and send them to system support.
        </Typography>

        <Typography
          id="ErrorDialog-error"
          variant="body1"
          component="pre"
          sx={{
            height: height * 14 + 'px',
            width: width + 'ex'
          }}
        >
          {stringError}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={async () => {
            const copyText = document.getElementById('ErrorDialog-error').textContent;
            await navigator.clipboard.writeText(copyText);
            onClose();
          }}
          color="primary"
        >
          Copy Error
        </Button>
      </DialogActions>
    </Dialog>
  );
};
