import { Container, Box, Heading, VStack, Spacer, Flex, Center, Stack } from '@chakra-ui/react'
import React from 'react'

const Homepage = () => {
    return (
        <Stack w='60%' m='auto' spacing={'2rem'}>
            <Center borderRadius={'0.5rem'} height={"5rem"} bg={'white'}><Heading title='Mern-chat-app' textAlign={'center'}>Mern-Chat-App</Heading></Center>

            <VStack borderRadius={'0.5rem'} bg={'white'} h='70vh'>

            </VStack>
        </Stack>
    )
}

export default Homepage