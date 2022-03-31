import React, { useEffect, useState } from "react";
import style from "../../style/SaleCarousel.module.css";
import { images } from "./SaleCarouselImage";

export default function SaleCarousel() {
  const [imgaeChange, setImageChange] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setImageChange(imgaeChange === 3 ? 0 : (prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [imgaeChange]);

  return (
    <>
      <div className={style.saleCarousel}>
        <div>
          <a href="/">
            <img src={images[imgaeChange].img} alt="img" />
          </a>
        </div>
        <div>
          <a href="/">
            <img
              src="https://onemg.gumlet.io/image/upload/w_480,h_200,,a_ignore,q_auto,f_auto/v1648147743/z9rugafadv1tiqitpkfi.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className={style.para}>
        <p>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</p>
      </div>
    </>
  );
}
