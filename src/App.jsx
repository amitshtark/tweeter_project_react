import { Route, Routes } from 'react-router-dom';
import './App.css'

import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx';
import LoginPage from "./pages/LoginPage.jsx";

import Navbar from "./components/Navbar.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import { TweetsProvider } from "./context/TweetsContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";


function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TweetsProvider>
                <HomePage />
              </TweetsProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App
