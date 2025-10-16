import { useState } from "react";

export const useLoading = () => {
  const [loading, setLoading] = useState(true);
  const isLoaded = () => {
    if (document.readyState === "complete") {
      setTimeout(() => setLoading(false), 300);
      return true;
    }
    return false;
  };

  if (!isLoaded()) {
    document.onreadystatechange = () => {
      isLoaded();
    };
  }

  return { loading };
};
