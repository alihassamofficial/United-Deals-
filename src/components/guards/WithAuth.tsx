"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, ComponentType, FC } from "react";
import { isAuthenticated } from "@/lib/auth";

function withAuth<P extends object>(Component: ComponentType<P>): FC<P> {
  const ProtectedRoute: FC<P> = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace("/login"); // redirect if not logged in
      } else {
        setLoading(false);
      }
    }, [router]);

    if (loading) return <p className="p-6">Checking authentication...</p>;

    return <Component {...props} />;
  };

  return ProtectedRoute;
}

export default withAuth;
