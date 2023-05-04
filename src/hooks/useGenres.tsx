import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genre {
    id: number;
    name: string
}

interface GenreResponse {
    count: number;
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)

        apiClient.get<GenreResponse>('/genres')
            .then((response) => { setGenres(response.data.results), setIsLoading(false) })
            .catch(error => {
                if (error instanceof CanceledError) return
                setError(error.message)
                setIsLoading(false)
            })
        return () => controller.abort()
    }, [])

    return { genres, error, isLoading }
}
export { useGenres }
