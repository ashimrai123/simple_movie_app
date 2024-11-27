import React from "react";
import { useMovieContext } from "./MovieContext";
import Container from "./Container";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaChevronRight, FaStar } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";

const Hero = () => {
  const { selectedMovie, setSelectedMovie } = useMovieContext();

  return (
    <>
      {selectedMovie ? (
        <div className="z-50 py-32">
          <Container>
            <div className="grid grid-cols-3 gap-10">
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
                    className=" flex items-center gap-2  rounded-full  "
                  >
                    <p className="font-medium">Watch Now</p>
                    <BiSolidRightArrow />
                  </Button>
                  <Button
                    variant={"default"}
                    className="flex items-center gap-2 rounded-full"
                  >
                    <p className="font-medium">Details</p>
                    <FaChevronRight />
                  </Button>
                </div>
                <div className="flex  gap-2 text-yellow-400 mt-1">
                  <FaStar className="size-5" />
                  <p className=" text-secondary">
                    Score: {selectedMovie.vote_average}/10
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
};

export default Hero;
