import { useSecurity } from './security-context';

export const Logout = () => {
  const { logout } = useSecurity();

  return <button onClick={logout}>Logout</button>;
};
