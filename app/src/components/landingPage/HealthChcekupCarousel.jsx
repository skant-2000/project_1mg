import React, { useEffect, useState } from "react";
import style from "../../style/HealthCheckupCarousel.module.css";
import { MdStarRate } from "react-icons/md";
import Carousel from "react-elastic-carousel";

export default function HealthChcekupCarousel() {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch("http://localhost:8000/checkups")
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
        <div className={style.HealthChcekupCarousel}>
          <img
            style={{width: "100%"}}
            src="https://onemg.gumlet.io/image/upload/v1638879520/ccdg5rr0hssuyw6nw27m.png"
            alt="img"
          />
          <div>
            <p>Full body health checkups</p>
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
                      <p>{item.name}</p>
                      <div>
                        <img
                          src="https://res.cloudinary.com/du8msdgbj/image/upload/v1590653294/safe_bjisiz.svg"
                          alt=""
                        />
                        <p>SAFE</p>
                      </div>
                    </div>
                    <p>{`includes ${item.tests} tests`}</p>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto"
                        alt="img"
                      />
                      <p>
                        4.9
                        <MdStarRate />
                      </p>
                      <p>ISO</p>
                    </div>
                    <div>
                      <div>₹{item.sp}</div>
                      <div>
                        <del>₹{item.mrp}</del>
                      </div>
                      <div>53% OFF</div>
                    </div>
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