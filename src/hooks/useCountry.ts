// hooks/useCountry.ts

import { useEffect, useState } from "react";

export function useCountry() {
  const [country, setCountry] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        setCountry(data.country_name);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getCountry();
  }, []);

  return { country, isLoading };
}
