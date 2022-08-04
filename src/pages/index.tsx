import type { NextPage } from "next";
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from "next/head";
import Slides from "../components/Slides";

import 'swiper/css';

const Home: NextPage = () => {
   return (
      <div className="">
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <nav className="fixed top-0 w-full h-20 bg-gray-500"></nav>
         <main className="bg-blue-500 h-screen w-full pt-20">
            <Swiper
               className="bg-green-500 h-full w-full"
               spaceBetween={10}
               slidesPerView={1}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}
               >
               <SwiperSlide>
                  <Slides />
               </SwiperSlide>
               <SwiperSlide>
                  <Slides />
               </SwiperSlide>
               <SwiperSlide>
                  <Slides />
               </SwiperSlide>
               <SwiperSlide>
                  <Slides />
               </SwiperSlide>
               <SwiperSlide>
                  <Slides />
               </SwiperSlide>
               <SwiperSlide>
                  <Slides />
               </SwiperSlide>
            </Swiper>
         </main>
      </div>
   );
};

export default Home;
