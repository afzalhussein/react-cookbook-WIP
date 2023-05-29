import { useEffect, useState } from 'react';
import axios from 'axios';

export const useCancelablePosts = (userId) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setError(null);
    if (userId) {
      const source = axios.CancelToken.source();
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
      })();
      return () => {
        console.log('axios request cancelled');
        source.cancel('axios request cancelled.');
      };
    } else {
      setData([]);
      setLoading(false);
    }
    return () => {};
  }, [userId]);

  return { data, loading, error };
};
