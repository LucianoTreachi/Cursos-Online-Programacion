"use client";

import { createContext, useContext, useEffect, useState } from "react";

// 1. Create the context
const FavoritesCoursesContext = createContext();

// 2. Create the component wrapper
export function FavoritesCoursesWrapper({ children }) {
  // Store the favorites courses
  const [favoritesCourses, setFavoritesCourses] = useState([]);

  // localStorage: Get the key from localStorage when the page loads
  useEffect(() => {
    const item = localStorage.getItem("favoritesCourses");
    // Check if there is data in localStorage before trying to access it
    if (item !== null) {
      const courses = JSON.parse(item);
      if (courses.length > 0) {
        setFavoritesCourses(courses);
      }
    }
  }, []);

  // localStorage: Set the key on localStorage
  useEffect(() => {
    localStorage.setItem("favoritesCourses", JSON.stringify(favoritesCourses));
  }, [favoritesCourses]);

  return (
    <FavoritesCoursesContext.Provider
      value={{
        favoritesCourses,
        setFavoritesCourses,
      }}
    >
      {children}
    </FavoritesCoursesContext.Provider>
  );
}

// 3. Function for use the context
export function useFavoritesCoursesContext() {
  return useContext(FavoritesCoursesContext);
}
