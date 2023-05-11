import { useQuery } from "@tanstack/react-query";
import { FetchResponse, useData } from "./useData";
import { Platform } from "./useGames";
import apiClient from "../services/api-client";

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000
})

export default usePlatforms

