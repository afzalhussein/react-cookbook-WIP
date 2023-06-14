import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { CachedQuery } from './cached-query';
import { MutationPage } from './mutation-page';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000 * 60 // 5 minutes
    }
  }
});

export function App() {
  return (
    // Provide the client to the APP
    <QueryClientProvider client={queryClient}>
      <Todos />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

function Todos() {
  const [tabId, setTabId] = useState(1);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <button key={1} onClick={() => setTabId(1)}>
          Query 1
        </button>
        <button key={2} onClick={() => setTabId(2)}>
          Query 2
        </button>
        <button key={3} onClick={() => setTabId(3)}>
          Mutation
        </button>
      </div>
      <h2>Tab: {tabId}</h2>
      {tabId === 1 && (
        <div>
          <h3>It loads data at the first time</h3>
          <CachedQuery />
        </div>
      )}
      {tabId === 2 && (
        <div>
          <h3>It uses the cached data</h3>
          <CachedQuery />
        </div>
      )}
      {tabId === 3 && (
        <div>
          <MutationPage />
        </div>
      )}
    </div>
  );
}
