import { Login } from './login';
import { useSecurity } from './security-context';

export const SecureGuard = ({ children }) => {
  const { loggedIn } = useSecurity();

  return loggedIn ? children : <Login />;
};
