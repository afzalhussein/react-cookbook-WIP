import { useEffect, useState } from 'react';

export const useUsers = (userId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

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
  }, [userId]);

  return { data, loading, error };
};
