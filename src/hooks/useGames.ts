const useGames = () => {
    const [games, setGames] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get('/games').then((res.data.results) => setGames(res)).catch ((error) => SpeechSynthesisErrorEvent(error.message))
    }, [])
return { games, error }
}
export default useGames