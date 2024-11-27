import React from "react";
import { useMovieContext } from "./MovieContext";
import Container from "./Container";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaChevronRight } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";

const Hero = () => {
  const { selectedMovie, setSelectedMovie } = useMovieContext();

  return (
    <>
      {selectedMovie ? (
        <div className="z-50 py-32">
          <Container>
            <div className="grid grid-cols-3 gap-10">
              {/* <Image
                src={`https://image.tmdb.org/t/p/w780${selectedMovie?.poster_path}`}
                height={1000}
                width={1000}
                alt={selectedMovie?.title}
                style={{ objectFit: "cover" }}
                className=" h-[30rem] w-96 rounded-3xl   transition-transform duration-100  "
              />{" "} */}
              <div className="col-span-2 max-w-96 grid gap-4">
                <h1 className="text-2xl sm:text-4xl font-semibold text-secondary ">
                  {selectedMovie.title}
                </h1>
                <p className="text-muted line-clamp-3">
                  {selectedMovie.overview}
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <Button
                    variant={"secondary"}
                    className=" flex items-center gap-2  rounded-full"
                  >
                    <p>Watch Now</p>
                    <BiSolidRightArrow />
                  </Button>
                  <Button
                    variant={"default"}
                    className="flex items-center gap-2 rounded-full"
                  >
                    <p>Details</p>
                    <FaChevronRight />
                  </Button>
                </div>
              </div>
            </div>
            <h1 className="">Hello there</h1>
          </Container>
        </div>
      ) : null}
    </>
  );
};

export default Hero;
