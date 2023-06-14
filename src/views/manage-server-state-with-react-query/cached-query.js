import { useQuery } from '@tanstack/react-query';

import { getTodos } from './apis';

export function CachedQuery() {
  const userId = '1';

  // queries
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todos', userId],
    queryFn: () => getTodos(userId)
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error}</div>;

  return (
    <div>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{`${todo.id}: ${todo.title}`}</li>
        ))}
      </ul>
    </div>
  );
}
