import { createContext, useContext, useEffect, useState } from "react";
import { login as loginApi, logout as logoutApi, getCurrentSession } from "../lib/authApi.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const [isAuthLoading, setIsAuthLoading] = useState(false);
    const [authError, setAuthError] = useState("");


    useEffect(() => {
        async function loadSession() {
        try {
            setIsAuthLoading(true);
            setAuthError("");

            const currentSession = await getCurrentSession();

            setSession(currentSession);
            setUser(currentSession?.user || null);
        } catch (err) {
            setAuthError("Failed to load session");
        } finally {
            setIsAuthLoading(false);
        }
        }

        loadSession();
    }, []);

    async function login(email, password) {
        try 
        {
            setIsAuthLoading(true);
            setAuthError("");

            const data = await loginApi(email, password);

            setSession(data.session);
            setUser(data.user);

            return data;
        }
        catch (err) {
            setAuthError("Failed to login");
            throw err;
        } 
        finally 
        {
            setIsAuthLoading(false);
        }
    }


    async function logout() {
        try {
            setIsAuthLoading(true);
            setAuthError("");

            await logoutApi();

            setSession(null);
            setUser(null);
        } 
        catch (err) {
            setAuthError("Failed to logout");
            throw err;
        } 
        finally {
            setIsAuthLoading(false);
        }
    }

    const value = {
        session,
        user,
        isAuthLoading,
        authError,
        login,
        logout
    };





  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}


