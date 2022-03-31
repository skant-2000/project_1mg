import React from 'react';
import Slider from 'infinite-react-carousel';
import { arr } from "./Arr";
export function LeftSlider() {

    const settings =  {
      arrows: false,
      autoplay: true,
      dots: true,
      dotsScroll: 1
      

    };
    return (
      <div>
        <Slider {...settings}>
          {
            arr.map((card, idx) => {
              return (<>
              <div style={{width: "60%", margin: "auto", textAlign: "center"}}>
                <img src={arr[idx][0]}/>
                <h3>{arr[idx][1]}</h3>
                <p>{arr[idx][2]}</p>
              </div>
              </>)
            })
          }
        </Slider>
      </div>
    );
  }
