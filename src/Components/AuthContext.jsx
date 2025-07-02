import React, { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { apiLogin, apiLogout, refreshToken } from './authAPI';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check if user session is still valid on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await refreshToken(); // { token, user }
        setAccessToken(response.token);
        setUser(response.user ?? null); // Ensure user is an object or null
        setError(null);
        console.log("Session user:", response.user);
      } catch (err) {
        console.error("Session check failed:", err);
        setUser(null);
        navigate('/'); // Redirect to login on failure
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  // Login method
  const login = async (credentials) => {
    try {
      const response = await apiLogin(credentials); // { accessToken, user }
      setAccessToken(response.accessToken);
      setUser(response.user ?? null);
      setError(null);

      const loggedInUser = response.user;

      // Redirect based on role
      if (loggedInUser?.role === 'admin') {
        navigate('/AdminDash');
      } else if (loggedInUser?.role === 'student') {
        navigate('/StudentDashboard');
      } else {
        console.warn("Unknown role:", loggedInUser?.role);
        navigate('/');
      }

      return response;
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.message || 'Login failed');
      throw err;
    }
  };

  // Logout method
  const logout = async () => {
    try {
      await apiLogout();
      setUser(null);
      setAccessToken(null);
      setError(null);
      // navigate('/'); // Redirect to login/home
      console.log('User logged out');
    } catch (err) {
      console.error("Logout failed:", err);
      setError(err.message || 'Logout failed');
    }
  };

  const isLoggedIn = !!user;

  // Memoize context value
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

  // Show loader while checking session
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-amber-500" />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Optional: helper hook
export const useAuth = () => useContext(AuthContext);
