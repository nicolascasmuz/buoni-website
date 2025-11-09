import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import leftArrow from "../../resources/left-arrow.png";
import rightArrow from "../../resources/right-arrow.png";
import pic00 from "../../resources/pic_00.webp";
import pic01 from "../../resources/pic_01.webp";
import pic02 from "../../resources/pic_02.webp";
import pic03 from "../../resources/pic_03.webp";
import pic04 from "../../resources/pic_04.webp";
import pic05 from "../../resources/pic_05.webp";
import pic06 from "../../resources/pic_06.webp";

const CarouselComp = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [products, setProducts] = useState([]);

  async function pullResults() {
    var bestProducts = [pic00, pic01, pic02, pic03, pic04, pic05, pic06];

    setProducts(bestProducts);
    console.log(bestProducts);
  }

  useEffect(() => {
    pullResults();
  }, []);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const nextSlide = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(nextSlide, 3000);

    emblaApi.on("pointerDown", () => clearInterval(interval));
    emblaApi.on("pointerUp", () => {
      setTimeout(() => {
        const newInterval = setInterval(nextSlide, 3000);
        emblaApi.on("pointerDown", () => clearInterval(newInterval));
      }, 500);
    });

    return () => clearInterval(interval);
  }, [emblaApi, nextSlide]);

  return (
    <section className={styles["embla"]}>
      <div className={styles["embla__viewport"]} ref={emblaRef}>
        <div className={styles["embla__container"]}>
          {products.map((r, index) => (
            <div className={styles["cat-container"]} key={index}>
              <img className={styles["cat-img"]} src={r.src} alt="img" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles["embla__controls"]}>
        <div className={styles["embla__buttons"]}>
          <Image
            src={leftArrow}
            alt="succulents-drawing"
            className={styles["carousel__arrow"]}
            onClick={() => {
              onPrevButtonClick();
            }}
            width={50}
            height={50}
          />
          <Image
            src={rightArrow}
            alt="succulents-drawing"
            className={styles["carousel__arrow"]}
            onClick={() => {
              onNextButtonClick();
            }}
            width={50}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default CarouselComp;
