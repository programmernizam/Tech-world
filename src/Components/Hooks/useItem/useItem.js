import { useEffect, useState } from "react";

const useItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://radiant-journey-01420.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items]
};
export default useItem;
