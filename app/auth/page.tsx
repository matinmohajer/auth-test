"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/auth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";

type FormData = {
  phone: string;
};

export default function AuthPage() {
  const router = useRouter();
  const { login, isLoading, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: FormData) => {
    await login(data.phone);
    router.push("/");
  };

  React.useEffect(() => {
    if (user) router.replace("/");
  }, [user, router]);

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "2rem" }}>
      <h1>ورود</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="شماره تلفن"
          placeholder="09xxxxxxxxx"
          {...register("phone")}
          error={errors.phone?.message}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "در حال ورود..." : "ورود"}
        </Button>
      </form>
    </div>
  );
}
