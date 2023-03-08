/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";

const ProductImagesSlider = ({ images }) => {
  console.log(images.length);
  const mainImage = useRef(null);
  const productSlider = useRef();

  useEffect(() => {
    if (images.length > 1)
      productSlider.current.firstChild.classList.add("product__image--active");
  }, [images]);

  const handleSlide = (e) => {
    document
      .querySelector(".product__image--active")
      .classList.remove("product__image--active");
    e.target.classList.add("product__image--active");

    mainImage.current.src = e.target.currentSrc;
  };

  return (
    <div className="product">
      <div className="product__images">
        <img
          src={images[0]}
          alt="google pixel 6"
          className="product__main-image"
          id="main-image"
          ref={mainImage}
        />

        {images.length > 1 && (
          <div className="product__slider-wrap">
            <div className="product__slider" ref={productSlider}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="google pixel 6"
                  className="product__image "
                  onClick={(e) => handleSlide(e)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImagesSlider;
