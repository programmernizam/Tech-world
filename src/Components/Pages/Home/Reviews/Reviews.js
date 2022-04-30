import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Reviews.css";
import "swiper/css/pagination";
import { Rating } from "react-simple-star-rating";
import { Pagination } from "swiper";

const Reviews = () => {
  return (
    <section className="review-section">
      <div className="container">
        <h2 className="my-4 text-center">Our Happy Customers</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="text-center p-5">
              <p>
                Have used this application for years and normally always enjoy
                the simple design. Occasionally, Tech World makes changes to
                format and customers have to adjust. Overall, the application
                makes it easy to buy and return items.
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center p-5">
              <p>
                I truly appreciate Tech World for cheap price. I get free
                shipping on everything I order and they have an free delivery
                and pickup locker at a Quick trip close to where I live. I don't
                worry about packages sitting on my front porch and I can pick
                them up.
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <img
                    style={{ width: "80px" }}
                    className="rounded-circle"
                    src="https://elprokit.deverust.com/rustglasseo/wp-content/uploads/sites/2/2021/12/handsome-businessman-in-eyeglasses-using-laptop-at-TLTJEMT.jpg"
                    alt=""
                  />
                </div>
                <div className="ms-3">
                  <p className="m-0">Mark Timoty</p>
                  <Rating ratingValue={100} readonly={true} size={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center p-5">
              <p>
                Absolutely LOVE shopping with Tech World, they have everything I
                look for with better deals and/or better quality. Returning
                products is very simple and no frustratingly long delays for
                money back. Shipping speeds are very fast for me especially and
                I've never received a damaged product deliver
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <img
                    style={{ width: "80px" }}
                    className="rounded-circle"
                    src="https://elprokit.deverust.com/rustglasseo/wp-content/uploads/sites/2/2021/12/concentrated-man-in-eyeglasses-using-laptop-at-wor-GCV4K5Y.jpg"
                    alt=""
                  />
                </div>
                <div className="ms-3">
                  <p className="m-0">Tom Cruse</p>
                  <Rating ratingValue={100} readonly={true} size={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
