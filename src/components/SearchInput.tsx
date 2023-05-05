import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"
import { useRef } from 'react'

interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: any) => {
        event.preventDefault()
        if (inputRef.current) {
            onSearch(inputRef.current.value);
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