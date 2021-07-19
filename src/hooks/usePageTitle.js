import { useEffect } from "react";

const usePageTitle = (count) => {
  useEffect(() => {
    if (count > 0) {
      document.title = `Mitesh (${count})`;
    } else document.title = `Mitesh`;
  }, [count]);
};

export default usePageTitle;
