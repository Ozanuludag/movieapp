import Header from "@/components/Header";
import React from "react";
import "./globals.css";
import Providers from "./Providers";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
