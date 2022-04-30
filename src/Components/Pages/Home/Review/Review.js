import React from "react";
import { Rating } from "react-simple-star-rating";
import { SwiperSlide } from "swiper/react";

const Review = ({ review }) => {
  const { name, review_text, img, ratings, rate } = review;
  return (
    <div className="text-center p-5">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        dolore! Dolores dolor cupiditate assumenda fugiat cumque quas sed
        tempora fugit tempore consectetur! Labore illum dolore fugit minus ab
        vero odio?
      </p>
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <img
            style={{ width: "80px" }}
            className="rounded-circle"
            src="https://elprokit.deverust.com/rustglasseo/wp-content/uploads/sites/2/2021/12/mature-islamic-female-using-smartphone-wearing-eye-78LM75D.jpg"
            alt=""
          />
        </div>
        <div className="ms-3">
          <p className="m-0">Zamela Rush</p>
          <Rating ratingValue={100} readonly={true} size={20} />
        </div>
      </div>
    </div>
  );
};

export default Review;
