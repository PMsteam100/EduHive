import React, { createContext, useState, useEffect, useMemo } from 'react';
import { apiLogin, apiLogout, refreshToken } from './authAPI';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

    useEffect(() => {
  const checkSession = async () => {
    try {
     const response = await refreshToken(); // Expect { token, user? }
      setAccessToken(response.token); // Adjust based on API response
      setUser(response.user || true); // Use user data or true
      console.log(response.user)
      setError(null);
    } catch (err) {
      setUser(null);
        navigate('/'); // Redirect to login if session check fails
    } finally {
      setLoading(false);
    }
  };

  checkSession();
}, []);

  const login = async (credentials) => {
  try {
    const response = await apiLogin(credentials);
    setAccessToken(response.accessToken);
    setUser(response.user || true); // Store user globally
    setError(null);

    // ✅ Use the value you've already set
    const loggedInUser = response.user;
    
    // Redirect based on role
    if (loggedInUser?.role === 'admin') {
      navigate('/AdminDash');
    } else if (loggedInUser?.role === 'student') {
      navigate('/StudentDashboard');
    } else {
      console.error("Unknown role");
    }

    return response;
  } catch (err) {
    setError(err.message || 'Login failed');
    throw err;
  }
};


  const logout = async () => {
    try {
      await apiLogout();
      setUser(null);
      setAccessToken(null);
      setError(null);
      // navigate('/');
      console.log('User logged out');
    } catch (err) {
      setError(err.message || 'Logout failed');
    }
  };
  

  const isLoggedIn = !!user;

  const value = useMemo(
    () => ({
      user,
      accessToken,
      login,
      logout,
      isLoggedIn,
      error,
    }),
    [user, accessToken, error]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-amber-48" />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
