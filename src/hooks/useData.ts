import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchResponse<T> {
    count: number;
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)

        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then((response) => { setData(response.data.results), setIsLoading(false) })
            .catch(error => {
                if (error instanceof CanceledError) return
                setError(error.message)
                setIsLoading(false)
            })
        return () => controller.abort()
    }, [])

    return { data, error, isLoading }
}
export { useData }
