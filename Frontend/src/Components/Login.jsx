import { Input, InputGroup, InputRightElement, Button, Text, FormControl, FormLabel, FormHelperText, FormErrorMessage, Stack, Center, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEyeSlash, FaEye, FaAt } from "react-icons/fa"
import { FcAddressBook } from "react-icons/fc"

const initalState = {
    email: '', password: ''
}

const Login = () => {
    const [show, setShow] = useState(false)
    const [isError, setIsError] = useState(false)
    const [formData, setFormData] = useState(initalState)

    function handleClick() {
        console.log(formData)
    }
    return (


        <Stack spacing={"5"} >
            <Center bg="gray.200" borderRadius={'1rem'}><FcAddressBook size={'200'} /></Center>
            <Heading size={'md'}>Enter Credential to Login</Heading>
            {/* Email Field */}
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={'email'}
                    placeholder='Email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <InputRightElement children={<FaAt />} />
            </InputGroup>

            {/* Password Filed */}
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <InputRightElement children={!show ? <FaEyeSlash /> : <FaEye />} onClick={() => setShow(!show)} />
            </InputGroup>

            {/* Submit */}

            <Button onClick={handleClick} colorScheme={'cyan'}>Login as User</Button>
            <Button colorScheme={"red"}>Login as Guest</Button>


        </Stack>


    )
}

export default Login