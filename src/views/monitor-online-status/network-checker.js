import { useOnline } from './use-online';

export function NetworkChecker() {
  const online = useOnline();

  return (
    <div className="App">
      <h1>Network Checker</h1>
      <span>
        You are now....
        {online ? (
          <div className="NetworkChecker-indicator-online">ONLINE</div>
        ) : (
          <div className="NetworkChecker-indicator-offline">OFFLINE</div>
        )}
      </span>
    </div>
  );
}
