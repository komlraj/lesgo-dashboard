import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../state/authStore.ts";

export default function PrivateRoute() {
  const user = useAuthStore((state) => state.user);
  return user ? <Outlet /> : <Navigate to="/login" />;
}
