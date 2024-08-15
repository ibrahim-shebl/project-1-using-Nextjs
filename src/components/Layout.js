"use client";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import {store } from "@/redux/store";
 

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
        <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
};

export default Layout;
