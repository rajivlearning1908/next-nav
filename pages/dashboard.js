// pages/dashboard.js
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  // Simulating fetching user data
  useEffect(() => {
    // Replace with actual data fetch logic (using the token in the cookie)
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)auth_token\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (token) {
      // If token exists, fetch user data
      setUser({ name: 'Rajiv Kumar' }); // Simulating a user object
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Navbar />
      <h1>Welcome to the Dashboard, {user.name}</h1>
      {/* Dashboard content */}
    </div>
  );
}
