import apiClient from "./client";

export const getCourse = (id) =>
{
   return apiClient.get(`/course/${id}`);
}