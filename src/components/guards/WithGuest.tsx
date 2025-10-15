"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, ComponentType, FC } from "react";
import { isAuthenticated } from "@/lib/auth";

function withGuest<P extends object>(Component: ComponentType<P>): FC<P> {
  const GuestOnlyRoute: FC<P> = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = () => {
        if (isAuthenticated()) {
          router.replace("/"); // redirect logged-in users
        } else {
          setLoading(false);
        }
      };

      checkAuth();
    }, [router]);

    if (loading) return <p className="p-6">Loading...</p>;

    return <Component {...props} />;
  };

  return GuestOnlyRoute;
}

export default withGuest;
