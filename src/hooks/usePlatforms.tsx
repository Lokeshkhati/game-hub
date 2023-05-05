import { useData } from "./useData";
import { Platform } from "./useGames";

// export interface Platform {
//     id: number;
//     name: string;
//     slug: number
// }

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms