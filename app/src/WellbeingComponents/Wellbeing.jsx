import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";
import styles from "./wellbeing.module.css";
import { Sidebar } from "./Sidebar";

export const Wellbeing = () => {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    let data = await axios.get(
      "http://localhost:8000/wellbeing_nutritions?form=Powder"
    );
    data = data.data;
    setItems(data);
  }, []);

  console.log("Items: ", items);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div>
        <div>
          <select name="sort" id="sort">
            <option value="Relevance">Relevance</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="discount">Discount</option>
          </select>
        </div>
        <div className={styles.itemsContainer}>
          {items.length > 0 &&
            items.map((item) => <Card key={`${item._id}`} item={item} />)}
        </div>
      </div>
    </div>
  );
};
