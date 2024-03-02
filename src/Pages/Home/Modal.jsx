/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Check if there's a timestamp in localStorage
    const lastVisitTime = localStorage.getItem("lastVisitTime");

    if (!lastVisitTime) {
      // If there's no timestamp, set the current time as the last visit time and show the modal
      localStorage.setItem("lastVisitTime", new Date().getTime().toString());
      setIsOpen(true);
    } else {
      // If there's a timestamp, check if it's been 2 hours since the last visit
      const twoHoursInMilliseconds = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(lastVisitTime);

      if (elapsedTime >= twoHoursInMilliseconds) {
        // If it's been 2 hours, update the last visit time and show the modal
        localStorage.setItem("lastVisitTime", currentTime.toString());
        setIsOpen(true);
      }
    }
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-20 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-gray-100 mx-8 md:mx-6 lg:mx-auto  p-8 rounded-lg shadow-lg relative ">
        <button
          className="absolute top-0 right-0 p-2 hover:scale-110 transition-transform duration-150"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="bg-primary w-full md:w-2/4 mx-auto rounded-lg">
          <h2 className="text-xl md:text-2xl lg:text-3xl my-5 p-2 lg:p-4  text-center font-semibold  font-hindSiliguri">
            বাজারে প্রবেশের দু'আ
          </h2>
        </div>
        <p className="text-md md:text-xl lg:text-2xl lg:max-w-3xl mb-4 font-notoSansArabic text-center  ">
          لاَ إِلهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
          وَلَهُ الْحَمْدُ، يُحْيِيْ وَيُمِيْتُ، وَهُوَ حَيٌّ لاَّ يَمُوْتُ،
          بِيَدِهِ الْخَيْرُ، وَهُوَ عَلى كُلِّ شَيْءٍ قَدِيْرٌ
        </p>
        <p className="text-md md:text-xl lg:text-2xl lg:max-w-3xl mb-4 font-hindSiliguri  text-center  ">
          আল্লাহ ব্যতীত কোন সত্য উপাস্য নেই। তিনি একক, তাঁর কোন অংশী নেই। তাঁরই
          নিমিত্তে সারা রাজত্ব ও সকল প্রশংসা। তিনি জীবিত করেন ও মৃত্যু দান করেন।
          তিনি চিরঞ্জীব, তাঁর মৃত্যু নেই। তাঁরই হাতে যাবতীয় মঙ্গল এবং তিনি সর্ব
          বস্ত্তর উপর সর্বশক্তিমান।
        </p>
        <p className="text-xs lg:max-w-3xl mb-4 font-hindSiliguri  text-center text-red-700 font-light  ">
          * বাজার প্রবেশ করে এই দু‘আটি যে পাঠ করবে আল্লাহ তাআলা তার জন্য ১০ লক্ষ
          পুণ্য লিপিবদ্ধ করবেন, তার ১০ লক্ষ পাপ মোচন করে দেবেন, তাকে ১০ লক্ষ
          মর্যাদায় উন্নীত করবেন এবং জান্নাতে তার জন্য একটি গৃহ নির্মাণ করবেন।{" "}
          <span className="text-green-800">- [সহীহ তিরমিযী হা/৩৪২৯]</span>
        </p>
      </div>
    </div>
  );
};

export default Modal;
