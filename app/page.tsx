"use client";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/auth");
  }, [user, router]);

  if (!user) return null;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the Dashboard, {user.name}!</h1>
      <img src={user.avatar} alt="Avatar" />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <Button
        onClick={() => {
          logout();
          router.push("/auth");
        }}
      >
        Logout
      </Button>
    </div>
  );
}
