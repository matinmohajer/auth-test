import { useAuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { user, setUser } = useAuthContext();
  const isLoggedIn = Boolean(user);
  return { user, setUser, isLoggedIn };
};