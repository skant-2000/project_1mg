import React, { useEffect, useState } from "react";
import style from "../../style/FeaturedBrandCarousel.module.css";
import Carousel from "react-elastic-carousel";
import { images } from "./FeaturedBrandCarouselImage";
import { useNavigate } from "react-router-dom";

export default function HealthChcekupCarousel() {
	const [data, setData] = useState();
  const navigate = useNavigate()
	useEffect(() => {
		try {
			setData(images);
		} catch {
			console.log("error");
		}
	}, []);

	if (data) {
		console.log(data);
	}

	const breakPoints = [
		{ width: 100, itemsToShow: 2, itemsToScroll: 2 },
		{ width: 450, itemsToShow: 3, itemsToScroll: 3 },
		{ width: 700, itemsToShow: 4, itemsToScroll: 4 },
		{ width: 1000, itemsToShow: 5, itemsToScroll: 5 },
  ];
  
  const handleNavigate = () => {
    navigate("/category/wellbeing-nutrition");
  }

	return (
		<>
			{data ? (
				<div className={style.FeaturedBrandCarousel}>
					<div>
						<p>Featured brands</p>
						<button>SEE ALL</button>
					</div>
					<div className={style.carousel}>
						<Carousel
							breakPoints={breakPoints}
							style={{ width: "95%", margin: "auto" }}
						>
							{data.map((item) => {
								return (
									<div onClick={handleNavigate} key={item.id} className={style.divs}>
										<img src={item.img} alt="img" />
										<p>{item.title}</p>
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
