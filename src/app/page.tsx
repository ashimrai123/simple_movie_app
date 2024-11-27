"use client";
import Hero from "@/components/Hero";
import Movies from "@/components/Movies";
import { useMovieContext } from "@/components/MovieContext";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import loader from "./loader.module.css";

export default function Home() {
  const { selectedMovie, isLoading } = useMovieContext();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {}, [selectedMovie]);
  return (
    <div>
      {isLoading ? (
        <div className="fixed w-full h-full z-50 bg-primary">
          <div className={loader["banter-loader"]}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={loader["banter-loader__box"]} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="">
        {selectedMovie && selectedMovie.backdrop_path ? (
          <>
            <Image
              src={`https://image.tmdb.org/t/p/original${selectedMovie?.backdrop_path}`}
              height={3000}
              width={3000}
              alt="background Image"
              style={{ objectFit: "cover" }}
              onLoad={() => setIsLoaded(true)}
              className={`fixed h-full w-full top-0 animate-out -z-20 bg-black `}
            />
            {!isLoaded && (
              <div className=" fixed top-0 h-full w-full bg-black -z-20"></div>
            )}
          </>
        ) : (
          <div className="fixed bg-primary w-full h-full top-0"></div>
        )}
        <div
          className="fixed top-0 left-0 h-full w-full  bg-gradient-to-r  -z-10 border-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.6) 15%, rgba(0, 0, 0, 0) 55%)",
          }}
        ></div>

        <Navbar />
        <Hero />
        <Movies />
      </div>
    </div>
  );
}
