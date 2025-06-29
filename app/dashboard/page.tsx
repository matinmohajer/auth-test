'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/Button';
import { useAuth } from '@/lib/hooks/useAuth';
import styles from './Dashboard.module.scss';
import faData from "@/lib/fa.json"

export default function DashboardPage() {
  const { user, isLoggedIn, setUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) router.replace('/auth');
  }, [isLoggedIn, router]);

  const handleLogout = () => {
    setUser(null);            
    router.push('/auth');
  };

  if (!user) return null;

  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>
        <Image
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          width={96}
          height={96}
          className={styles.avatar}
        />

        <h1 className={styles.heading}>
            {faData.welcome}
            {" "}
            {user.name.first}
        </h1>

        <p className={styles.email}>{user.email}</p>

        <Button className={styles.logout} onClick={handleLogout}>
          {faData.exit}
        </Button>
      </div>
    </main>
  );
}
