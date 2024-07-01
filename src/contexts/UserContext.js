'use client';
import React, { createContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const routerPath = usePathname();
  const router = useRouter();
  const islogin =
    typeof window !== 'undefined' && localStorage.getItem('login');

  const handleLocalStorage = {
    clearLocalStorage: () => {
      window.localStorage.removeItem('login');
    },
  };

  const logoutUser = () => {
    handleLocalStorage.clearLocalStorage();
    router.push('/');
  };

  let currentRoute = routerPath;

  let handleRoute = (currentRoute) => {
    router.push(currentRoute);
  };
  return (
    <UserContext.Provider
      value={{
        islogin,
        router,
        handleRoute,
        currentRoute,
        logoutUser,
        handleLocalStorage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
