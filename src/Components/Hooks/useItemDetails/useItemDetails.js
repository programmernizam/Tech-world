import { useEffect, useState } from "react";

const useItemDetails = (itemId) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:4200/items/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId]);
  return [item];
};

export default useItemDetails;
