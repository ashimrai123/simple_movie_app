"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { axiosInstance } from "@/lib/axiosInstance";
import { Movie } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./Container";
import { useMovieContext } from "./MovieContext";

interface MoviesDetails {
  results: Movie[];
}

const Movies = () => {
  const [movies, setMovies] = useState<MoviesDetails | null>(null);
  const { setSelectedMovie, setIsLoading } = useMovieContext();

  useEffect(() => {
    axiosInstance()
      .get("/discover/movie")
      .then((response) => {
        setMovies(response.data);
        setSelectedMovie(response.data.results[0]);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="my-10">
      <Container>
        <div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold pb-4 text-secondary">
              Trending Movies
            </h1>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="">
              {movies?.results.map((movie) => {
                return (
                  <CarouselItem
                    className="  min-[400px]:basis-1/2 md:basis-1/3 lg:basis-1/4 "
                    key={movie.id}
                  >
                    <div onClick={() => handleMovieClick(movie)} className="">
                      <Image
                        src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                        height={1000}
                        width={1000}
                        alt={movie.title}
                        style={{ objectFit: "cover" }}
                        className=" h-96 w-full rounded-2xl mx-auto hover:scale-105 transition-transform duration-100 "
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Movies;
