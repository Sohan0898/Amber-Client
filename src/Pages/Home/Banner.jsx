// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./bannerStyle.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <div className="font-roboto">
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://i.ibb.co/FhXQJdL/Discount-up-to-30-off-2.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-white">
              <p className="md:text-md lg:text-xl md:mt-6 lg:mt-32 text-center  font-medium">
                AMBER
              </p>

              <div className="border-b-2 md:w-5 lg:w-10 mx-auto md:mt-3 lg:mt-6"></div>

              <h1 className="text-center md:mt-10 lg:mt-20 font-semibold md:text-4xl lg:text-6xl">
                {" "}
                EID SALES
              </h1>
              <h1 className="text-center mt-1 text-gray-700 font-medium md:text-sm lg:text-xl">
                Discount up to 30% off.
              </h1>
              <div className="mx-auto text-center md:mt-6 lg:mt-12">
                <button
                  type="button"
                  className="group relative md:h-9 lg:h-14 md:w-24 lg:w-48 overflow-hidden border-2 border-secondary md:text-md lg:text-xl text-white hover:text-white font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <span className="bg-amber-600  ease-in absolute md:w-[60%] lg:w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10    skew-x-12"></span>
                  <span className="bg-amber-500 ease-in absolute md:w-[60%] lg:w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>
                  EXPLORE
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://i.ibb.co/zH3z6Wt/Discount-up-to-15-off.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-white">
              <p className="md:text-md lg:text-xl md:mt-6 lg:mt-32 text-center  font-medium">
                AMBER
              </p>

              <div className="border-b-2 md:w-5 lg:w-10 mx-auto md:mt-3 lg:mt-6"></div>

              <h1 className="text-center md:mt-10 lg:mt-20 font-semibold md:text-4xl lg:text-6xl">
                {" "}
                NEW ARRIVAL
              </h1>
              <h1 className="text-center mt-1 text-primary font-medium md:text-sm lg:text-xl">
                Discount up to 15% off.
              </h1>
              <div className="mx-auto text-center md:mt-6 lg:mt-12">
                <button
                  type="button"
                  className="group relative md:h-9 lg:h-14 md:w-24 lg:w-48 overflow-hidden border-2 border-primary md:text-md lg:text-xl text-white hover:text-white font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <span className="bg-amber-600  ease-in absolute md:w-[60%] lg:w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10    skew-x-12"></span>
                  <span className="bg-amber-500 ease-in absolute md:w-[60%] lg:w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>
                  EXPLORE
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://i.ibb.co/k3PLKWH/Discount-up-to-15-off-1.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-primary">
              <p className="md:text-md lg:text-xl md:mt-6 lg:mt-32 text-center  font-medium">
                AMBER
              </p>

              <div className="border-b-2 border-primary md:w-5 lg:w-10 mx-auto md:mt-3 lg:mt-6"></div>

              <h1 className="text-center text-primary md:mt-10 lg:mt-20 font-semibold md:text-4xl lg:text-6xl">
                {" "}
                BIGGEST SALES
              </h1>
              <h1 className="text-center mt-1 text-gray-700 font-medium md:text-sm lg:text-xl">
                Discount up to 70% off.
              </h1>
              <div className="mx-auto text-center md:mt-6 lg:mt-12">
                <button
                  type="button"
                  className="group relative md:h-9 lg:h-14 md:w-24 lg:w-48 overflow-hidden border-2 border-secondary md:text-md lg:text-xl text-primary hover:text-white font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <span className="bg-amber-600  ease-in absolute md:w-[60%] lg:w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10    skew-x-12"></span>
                  <span className="bg-amber-500 ease-in absolute md:w-[60%] lg:w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>
                  EXPLORE
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              backgroundImage:
                'url("https://i.ibb.co/MBy3fwv/Discount-up-to-15-off-2.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-white">
              <p className="md:text-md lg:text-xl md:mt-6 lg:mt-32 text-center  font-medium">
                AMBER
              </p>

              <div className="border-b-2 md:w-5 lg:w-10 mx-auto md:mt-3 lg:mt-6"></div>

              <h1 className="text-center md:mt-10 lg:mt-20 font-semibold md:text-4xl lg:text-6xl">
                {" "}
                WINTER SALES
              </h1>
              <h1 className="text-center mt-1 text-primary font-medium md:text-sm lg:text-xl">
                Discount up to 40% off.
              </h1>
              <div className="mx-auto text-center md:mt-6 lg:mt-12">
                <button
                  type="button"
                  className="group relative md:h-9 lg:h-14 md:w-24 lg:w-48 overflow-hidden border-2 border-primary md:text-md lg:text-xl text-white hover:text-white font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <span className="bg-amber-600  ease-in absolute md:w-[60%] lg:w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10    skew-x-12"></span>
                  <span className="bg-amber-500 ease-in absolute md:w-[60%] lg:w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>
                  EXPLORE
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
