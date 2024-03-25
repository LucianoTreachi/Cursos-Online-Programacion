import { data } from "@/data/data";

export async function getAllCourses() {
  try {
    return data;
  } catch (error) {
    throw new Error("Error al recuperar todos los cursos");
  }
}
