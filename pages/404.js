// /pages/404.js
import React from 'react';
import Link from 'next/link';
import styles from './404.module.css';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
      <Link href="/">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default Custom404;
