import { data } from "@/data/data";

export async function getIndividualCourse(courseUrl) {
  try {
    // Iterate through each category in the data
    for (const category of data) {
      // Iterate through each course within the category
      for (const course of category.courses) {
        // If the course URL matches the provided URL
        if (course.url === courseUrl) {
          // Return the found course
          return course;
        }
      }
    }
    // If no course is found with the given URL
    return null;
  } catch (error) {
    throw new Error(`Error al recuperar el curso con URL: ${courseUrl}`);
  }
}
