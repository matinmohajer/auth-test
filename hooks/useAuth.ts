import { useAuth as useCtxAuth } from "../context/AuthContext";
import { useMutation } from "@tanstack/react-query";

export const useAuth = () => {
  const { login, logout, user } = useCtxAuth();

  const mutation = useMutation({
    mutationFn: (phone: string) => login(phone),
  });

  return {
    user,
    login: mutation.mutateAsync,
    isLoading: mutation.status === "pending",
    logout,
  };
};
