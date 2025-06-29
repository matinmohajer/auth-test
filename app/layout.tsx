"use client";
import "./globals.css";
import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a single QueryClient instance for the app
const queryClient = new QueryClient();

export const meta = {
  title: "Auth Demo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
