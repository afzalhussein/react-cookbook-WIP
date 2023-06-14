import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getTodos, postTodo } from './apis';

export const MutationPage = () => {
  const userId = '1';
  const queryClient = useQueryClient();

  // queries
  const { data } = useQuery({ queryKey: ['todos', userId], queryFn: () => getTodos(userId) });

  // mutations
  const { mutate } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // invalidate and refresh
      console.log('onSuccess');
      // queryClient.invalidateQueries({ queryKey: ['todos'] }); // this will trigger todos re-loading
    }
  });

  return (
    <div>
      <button
        onClick={() =>
          mutate(
            {
              id: Date.now(),
              userId,
              title: 'Do Laundry'
            },
            {
              onSuccess: (data, variables) => {
                queryClient.setQueryData(['todos', userId], (oldData) =>
                  oldData ? [variables, ...oldData] : [variables]
                );
              }
            }
          )
        }
      >
        Add Todo
      </button>

      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{`${todo.id}: ${todo.title}`}</li>
        ))}
      </ul>
    </div>
  );
};
