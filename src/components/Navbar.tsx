"use client";
import { axiosInstance } from "@/lib/axiosInstance";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Container from "./Container";
import { useMovieContext } from "./MovieContext";

const Navbar = () => {
  const { selectedMovie, setSelectedMovie } = useMovieContext();
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>("");

  // Debounce delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (!debouncedSearchQuery) {
      return;
    }

    axiosInstance()
      .get("/search/movie", {
        params: {
          query: debouncedSearchQuery,
        },
      })
      .then((res) => {
        setSuggestions(res.data.results || []);
      })
      .catch((err) => {
        setSuggestions([]);
        console.error("Error searching for movies.", err);
      });
  }, [debouncedSearchQuery]);

  // Close the search dropdown when we click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearching(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky w-full">
      <Container className={`mx-auto`}>
        <div className="flex justify-between items-center py-3 px-5 my-2 rounded-xl">
          <div className="flex items-center gap-5">
            <Link href={"/"} className="text-secondary text-2xl font-semibold">
              Watch
            </Link>
          </div>
          <div className="relative grid" ref={searchRef}>
            <div className="hidden md:flex items-center border dark:bg-background rounded-full p-2 w-full max-w-sm">
              <input
                type="text"
                value={searchQuery}
                placeholder="Search Movies..."
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearching(true);
                }}
                className="flex-1 pl-2 text-secondary text-sm md:text-base outline-none caret-secondary bg-transparent placeholder:text-secondary"
              />
              <CiSearch className="text-xl text-secondary" />
            </div>
            <div className="relative">
              {isSearching && (
                <div className="absolute bg-white shadow-md rounded-md mt-0.5 w-full max-h-64 overflow-y-auto">
                  {suggestions.length > 0 ? (
                    suggestions.map((movie) => (
                      <div
                        key={movie.id}
                        onClick={() => {
                          setSearchQuery(movie.title);
                          setSelectedMovie(movie);
                          setIsSearching(false);
                        }}
                      >
                        <div className="p-2 hover:bg-gray-200 cursor-pointer">
                          {movie.title}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-2">No results found</div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
