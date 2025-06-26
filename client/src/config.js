// Configuration file for API endpoints and socket connection
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://duochat-deployed.onrender.com';
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'https://duochat-deployed.onrender.com';

export { API_BASE_URL, SOCKET_URL }; 