// authAPI.js
import axios from 'axios';

const API = 'https://eduhive-3f2t.onrender.com/api/auth';
const APIM = 'https://eduhive-3f2t.onrender.com/api'; // For messages
// const API = 'http://localhost:5000/api/auth';
// const APIM = 'http://localhost:5000/api'; // For messages


// Login user
export const apiRegister = async (credentials) => {
  const response = await axios.post(`${API}/register`, credentials, { withCredentials: true });
};
// Login user
export const apiLogin = async (credentials) => {
  const response = await axios.post(`${API}/login`, credentials, { withCredentials: true });
  return response.data; // Expect { accessToken, user? }
};

// Logout user
export const apiLogout = async () => {
  const response = await axios.post(`${API}/logout`, {}, { withCredentials: true });
  return response.data;
};


// Refresh authentication token
export const refreshToken = async () => {
  const response = await axios.post(`${API}/refresh`, {}, { withCredentials: true });
  return response.data.accessToken;
};

// Request password reset email
// export const forgotPassword = (email) => {
//   return axios.post(`${API}/forgot-password`, { email });
// };

// Reset password using token
// export const resetPassword = (token, newPassword) => {
//   return axios.post(`${API}/reset-password`, { token, password: newPassword });
// };


// Send a message to the user
// export const apiSendMessage = (message) => {
//   return axios.patch(`${APIM}/user/message`, { message }, {
//     withCredentials: true, // Include cookies if you're using cookie-based auth
//   });
// };

// Send a message as a guest
export const apiSendGuestMessage = (formData) => {
  return axios.post(`${API}/apiSendGuestMessage`, formData);
};


