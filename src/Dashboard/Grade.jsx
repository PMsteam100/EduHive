import React from 'react'
import { Pagination, Autoplay } from "swiper/modules";
import { Card, CardContent } from "../Components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { VscBook } from "react-icons/vsc";
import { PiNotebookDuotone } from "react-icons/pi";

const Grade = () => {

  return (
    <div>
      <section className="p-4 pt-0">
        <h2 className="text-lg text-blue-800 font-bold mb-2">Grade</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          className=" h-54"
        >
          {["Biology Molecular", "Physics", "Mathematics", "Chemistry"].map(
            (subject, index) => (
              <SwiperSlide key={index}>
                <Card className='flex justify-center items-center'>
                  <CardContent className=" text-center">
                    <h3 className="text-lg font-semibold">{subject}</h3>
                    <div class="relative p-2 flex justify-center">
                      <div className='size-18'>
                        <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="2"></circle>
                          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-800 dark:text-blue-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="30" stroke-linecap="round"></circle>
                        </svg>
                        <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <span class="text-center text-xl font-bold text-black dark:text-black">{Math.floor(Math.random() * 50) + 50}%</span>
                        </div>
                      </div>
                    </div>
                    {/* <p className="text-blue-600 text-xl font-bold">{Math.floor(Math.random() * 50) + 50}%</p> */}

                    <p className="text-sm "> <PiNotebookDuotone className="inline-block text-blue-800" /> {Math.floor(Math.random() * 10) + 5}  Lessons <VscBook className="inline-block text-blue-800 ml-4" /> {Math.floor(Math.random() * 6) + 2} Assignments</p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </section>

    </div>
  )
}

export default Grade