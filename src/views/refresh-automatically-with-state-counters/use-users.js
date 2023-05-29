import { useEffect, useState, useCallback } from 'react';

export const useUsers = (userId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [updating, setUpdating] = useState(false);
  const [stateVersion, setStateVersion] = useState(0);

  useEffect(() => {
    let didCancel = false;
    setError(null);
    if (userId) {
      (async () => {
        try {
          setLoading(true);
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
          if (!response.ok) {
            const text = await response.text();
            throw new Error(`Unable to get user details for ${userId}: ${text}`);
          }
          const body = await response.json();
          if (!didCancel) {
            setData(body);
          }
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    } else {
      setData(null);
      setLoading(false);
    }
    return () => {
      didCancel = true;
    };
  }, [userId, stateVersion]);

  const update = useCallback(
    async (msg) => {
      setUpdating(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          method: 'PUT',
          body: JSON.stringify({
            id: userId,
            userId: userId,
            version: msg
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        });
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Unable to update user details for ${userId}: ${text}`);
        }
        setStateVersion((v) => v + 1);
      } finally {
        setUpdating(false);
      }
    },
    [userId]
  );

  return { data, loading, error, update, updating };
};
