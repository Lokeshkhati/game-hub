import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Navbar from "../components/Navbar"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <Navbar />
            <Box padding={10}>
                <Heading>Oops</Heading>
                <Text>{isRouteErrorResponse(error) ? "This page does not exist" : 'Unexpected error occurred.'}</Text>
            </Box>
        </>
    )
}
export default ErrorPage
