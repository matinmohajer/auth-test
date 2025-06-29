'use client';

import AuthForm from '@/components/AuthForm';
import { useAuth } from '@/lib/hooks/useAuth';
import { useRouter } from 'next/navigation';
import styles from './Auth.module.scss';
import { useEffect } from 'react';
import faData from "@/lib/fa.json";

export default function AuthPage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.replace('/dashboard');
  }, [isLoggedIn, router]);

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1>{faData.login}</h1>
        <AuthForm />
      </section>
    </main>
  );
}
