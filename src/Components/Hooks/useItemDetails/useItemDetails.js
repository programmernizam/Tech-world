import { useEffect, useState } from "react";

const useItemDetails = (itemId) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `https://tech-word-server.onrender.com/items/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId]);
  return [item];
};

export default useItemDetails;
