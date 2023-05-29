import { useEffect, useState } from 'react';
import axios from 'axios';

export const useDebouncedCancelablePosts = (userId, interval = 500) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setError(null);
    if (userId) {
      const source = axios.CancelToken.source();
      const newTimer = setTimeout(
        () =>
          (async () => {
            try {
              setLoading(true);
              const result = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: { userId },
                CancelToken: source.token
              });
              setData(result);
            } catch (err) {
              setError(err);
            } finally {
              setLoading(false);
            }
          })(),
        interval
      );
      return () => {
        console.log('axios request cancelled');
        source.cancel('axios request cancelled.');
        clearTimeout(newTimer);
      };
    } else {
      setData([]);
      setLoading(false);
    }
    return () => {};
  }, [userId, interval]);

  return { data, loading, error };
};
