import React, { useEffect, useState } from "react";
import style from "../../style/Products.module.css";
import Carousel from "react-elastic-carousel";
import { MdStarRate } from "react-icons/md";


export default function HealthChcekupCarousel() {
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

  if (data) {
    console.log(data[0]);
  }

  const breakPoints = [
    { width: 100, itemsToShow: 1, itemsToScroll: 1 },
    { width: 450, itemsToShow: 2, itemsToScroll: 2 },
    { width: 700, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1000, itemsToShow: 4, itemsToScroll: 4 },
  ];

  return (
    <>
      {data ? (
        <div className={style.Products}>
          <div>
            <p>Products</p>
            <button>SEE ALL</button>
          </div>
          <div className={style.carousel}>
            <Carousel
              breakPoints={breakPoints}
              style={{ width: "95%", margin: "auto" }}
            >
              {data.map((item) => {
                return (
                  <div key={item._id} className={style.divs}>
                      <div>
                        <img src={item.image} alt="img" />
                      </div>
                      <p>{item.name}</p>
                      <p>{item.form}</p>
                      <p>{item.quantity}</p>
                      <div>
                          <div>4.4<MdStarRate /></div>
                          <div>{item.sp} ratings</div>
                      </div>
                      <p>MRP <del>₹{item.mrp}</del><span> {Math.round(((item.mrp - item.sp) / item.mrp )*100)}% off</span></p>
                      <p>₹{item.sp}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      ) : null}
    </>
  );
}   