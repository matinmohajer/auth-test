'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchRandomUser } from '@/lib/services/userService';
import { loginSchema, LoginFormData } from '@/lib/validation/authSchema';
import { useAuth } from '@/lib/hooks/useAuth';
import  {Input}  from './Input';
import  {Button}  from './Button';
import faData from "@/lib/fa.json"

export default function AuthForm() {
  const router = useRouter();
  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, status } = useMutation({
    mutationFn: fetchRandomUser,
    onSuccess: (data) => {
      setUser(data);
      router.push('/dashboard');
    },
  });

  const onSubmit = (data: LoginFormData) => mutate();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>
        {faData.phone}
        <Input
            style={{marginBlock:"1rem"}}
          type="tel"
          placeholder="09xxxxxxxxx"
          {...register('phone')}
          aria-invalid={errors.phone ? 'true' : 'false'}
          autoComplete="tel"
        />
      </label>
      {errors.phone && (
        <p role="alert" style={{ color: 'crimson', marginTop: '0.25rem' }}>
          {errors.phone.message}
        </p>
      )}
      <Button type="submit" loading={status === 'pending'? true : false} >
        {faData.login}
      </Button>
    </form>
  );
}
