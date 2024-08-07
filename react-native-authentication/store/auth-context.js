import {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {}
});

export const AuthContextProvider = ({children}) => {
  const [authToken, setAuthToken] = useState();
  const authenticate = (token) => {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  const logout = () => {
    setAuthToken(null);
    AsyncStorage.removeItem('token');

  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate:authenticate,
    logout: logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
