import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"
import { useRef } from 'react'
import useGameQueryStore from "../store"
import { useNavigate } from "react-router-dom"

interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const setSearchText = useGameQueryStore(search => search.setSearchText)

    const navigate = useNavigate()
    const submitHandler = (event: any) => {
        event.preventDefault()
        if (inputRef.current) {
            setSearchText(inputRef.current.value);
            navigate('/')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <InputGroup width='100%' >
                <InputLeftElement children={<BsSearch />} />
                <Input ref={inputRef} borderRadius={20} placeholder="Search games..." variant='filled' />
            </InputGroup>
        </form>
    )
}
export default SearchInput