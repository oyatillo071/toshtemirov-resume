"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Cursor from "./Cursor";
import Social from "./Social";
import Link from "next/link";
import MeImg from "/public/me.jpeg";
import { buttonVariants } from "./ui/button";
import "animate.css";

export default function Me() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY); // Scroll qiymatini olish
    };

    window.addEventListener("scroll", handleScroll); // Scroll eventini qo‘shish

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <section className="py-5 flex sm:items-center h-full">
      <Cursor />
      <div className="container max-w-screen-lg mx-auto px-5">
        <div>
          <div className="flex flex-col items-center mb-5 gap-3 sm:gap-6 sm:flex-row">
            <Image
              className="w-[100px] h-[100px] aspect-square object-contain rounded-lg sm:w-[170px] sm:h-[170px] sm:shadow-xl animate__animated animate__fadeInUp animate__delay-1s"
              src={MeImg}
              width={100}
              height={100}
              alt="Oyatillo Toshtemirov"
            />
            <div
              className="flex flex-col text-center items-center sm:text-left sm:items-start animate__animated animate__fadeInUp animate__delay-1.5s"
              style={{ transform: `translateY(${scroll * 0.3}px)` }} // Parallax effektini qo‘shish
            >
              <h2 className="text-2xl font-medium mb-1 sm:text-4xl">
                Oyatillo
              </h2>
              <h2 className="text-slate-500 text-lg font-medium mb-2 sm:text-2xl">
                Front End Dasturchi
              </h2>{" "}
              <Social />
            </div>
          </div>
          <div className="flex flex-col items-center text-center sm:text-left sm:items-start sm:max-w-96">
            <p className="mb-5 sm:text-lg animate__animated animate__fadeInUp animate__delay-2s">
              Yillar davomida tinchlik bermagan{" "}
              <span className="underline font-medium">muammoni</span> atiga bir
              necha qator kod bilan{" "}
              <span className="underline font-medium">hal qilishimga</span>{" "}
              ishonasizmi?
            </p>
            <div className="flex gap-5">
              <Link
                className={`${buttonVariants({
                  variant: "default",
                })} animate__animated animate__fadeInUp animate__delay-3s`}
                href="/projects/"
              >
                Yechimlar
              </Link>
              <Link
                className={`${buttonVariants({
                  variant: "outline",
                })} animate__animated animate__fadeInUp animate__delay-3s`}
                href="/me/"
              >
                Haqimda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
