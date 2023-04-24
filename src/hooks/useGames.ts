import { useEffect, useState } from "react"

const useGames = () => {
    const [games, setGames] = useState([])
    const [error, setError] = useState('')

    // useEffect(() => {
    //     apiClient.get('/games').then((res.data.results) => setGames(res)).catch ((error) => console.log(error.message))
    // }, [])
return { games, error }
}
export default useGames