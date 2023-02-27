import { Container, Box, Heading, VStack, Spacer, Flex, Center, Stack, TabPanels, TabPanel,Tabs, Tab, TabList } from '@chakra-ui/react'
import React from 'react'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'

const Homepage = () => {
    return (
        <Stack w='50%' spacing={'2rem'} >
            <Center borderRadius={'0.5rem'} height={"5rem"} bg={'white'}><Heading title='Mern-chat-app' textAlign={'center'}>Mern-Chat-App</Heading></Center>

            <Box borderRadius={'0.5rem'} bg={'white'} h='70vh'>
                <Tabs isFitted variant={'solid-rounded'} colorScheme='cyan'>
                    <TabList m='1em'>
                        <Tab>Login</Tab>
                        <Tab>SIgnUp</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                           <Login />
                        </TabPanel>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Stack>
    )
}

export default Homepage