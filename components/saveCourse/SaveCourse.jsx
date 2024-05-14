"use client";

import { useFavoritesCoursesContext } from "@/context";
import { useState } from "react";

import HeartFillIcon from "@/icons/HeartFillIcon";
import HeartIcon from "@/icons/HeartIcon";
import styles from "./SaveCourse.module.css";

export default function SaveCourse({ imageCourse, urlCourse }) {
  // Use the context
  const { favoritesCourses, setFavoritesCourses } =
    useFavoritesCoursesContext();

  // Check if the course is in favorites based on the image
  const isFavorite = favoritesCourses.some(
    (course) => course.thumbnail === imageCourse
  );

  // Manage the state of the button
  const [clicked, setClicked] = useState(isFavorite);

  function handleClick() {
    setClicked(!clicked);

    if (!clicked) {
      // Add the course to favorites if it's not already included
      setFavoritesCourses([
        ...favoritesCourses,
        { thumbnail: imageCourse, url: urlCourse },
      ]);
    } else {
      // Remove the course from favorites if it's already included
      const updatedFavorites = favoritesCourses.filter(
        (course) => course.thumbnail !== imageCourse
      );
      setFavoritesCourses(updatedFavorites);
    }
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {clicked ? (
        <>
          <HeartFillIcon className={styles.heartFillIcon} />
          <span>Curso guardado</span>
        </>
      ) : (
        <>
          <HeartIcon className={styles.heartIcon} /> <span> Guardar curso</span>
        </>
      )}
    </button>
  );
}
