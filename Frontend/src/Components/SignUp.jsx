import { Input, InputGroup, InputRightElement, Button, Text, Stack, Center, Heading, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEyeSlash, FaEye, FaAt } from "react-icons/fa"
import { FcPortraitMode } from "react-icons/fc"



const initalState = {
    name: "", email: '', password: ''
}

const SignUp = () => {
    const [show, setShow] = useState(false)
    const [isError, setIsError] = useState(false)
    const [formData, setFormData] = useState(initalState)
    const [isLoading, setIsLoading] = useState('');
    const [imageSrc, setImageSrc] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")

    async function uploadImage(e) {
        let file = e.target.files[0];
        setImageSrc(URL.createObjectURL(file))
    }

    function handleClick() {
        setShow(!show)
    }
    return (


        <Stack spacing={"5"} >

            <Center borderRadius={'1rem'}>
                <Image w={200} h={200} src={imageSrc} alt="ds" borderRadius={'50%'} />
            </Center>
            <Heading size={'md'}>All Fields are required</Heading>
            {/* Name Field */}
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={'name'}
                    placeholder='Name'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <InputRightElement children={<FaAt />} />
            </InputGroup>
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


            <Input
                type='file'
                pt='0.25rem'
                onChange={uploadImage}
                accept="image/*"
            />


            {/* Submit */}

            <Button onClick={handleClick} colorScheme={'cyan'}>Create a new Account</Button>



        </Stack>


    )
}

export default SignUp