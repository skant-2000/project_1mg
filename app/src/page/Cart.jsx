import React, { useEffect, useState } from "react";
import style from "../style/Cart.module.css";

export default function Cart() {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch("http://localhost:8000/products")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch {
      console.log("error");
    }
  }, []);

  return (
    <>
      {data ? (
        <div className={style.cart}>
          <div>
            <p>Items NOT Requiring Prescription ({data.length})</p>
            {data.map((item) => (
              <div key={item._id}>
                <div>
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <p>₹{item.sp}</p>
                    <p>MRP <del>₹{item.mrp}</del></p>
                  </div>
                </div>
                <p>{item.quantity}</p>
              </div>
            ))}
          </div>

          <div>
            <p>hello world, I am Suryakant</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
