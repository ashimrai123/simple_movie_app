"use client";
import { Movie } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type MovieContextType = {
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie) => void;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <MovieContext.Provider
      value={{ selectedMovie, setSelectedMovie, isLoading, setIsLoading }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
