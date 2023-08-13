import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 ** 60 * 1000, //24
})

export default useGenres
