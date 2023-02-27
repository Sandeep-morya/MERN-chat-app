import { Input, InputGroup, InputRightElement, Button, Text, Stack, Center, Heading, Image } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { FaEyeSlash, FaEye, FaAt } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';



const initalState = {
    name: "", email: '', password: '', image: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
}

const { VITE_CLOUD_NAME, VITE_CLOUDINARY_URL, VITE_USER_BASE_URL } = import.meta.env

const SignUp = () => {
    const [show, setShow] = useState(false)
    const [isError, setIsError] = useState(false)
    const [formData, setFormData] = useState(initalState)
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    /* Function to upload Image & setImage URL */
    async function uploadImage(e) {

        /* Created image Document */
        let image = e.target.files[0];
        const file = new FormData();
        file.append("file", image);
        file.append("upload_preset", "chat-app");
        file.append("cloud_name", VITE_CLOUD_NAME);

        /* Image Upload  */
        setIsError(false);
        setIsLoading(true);
        try {
            const { data } = await axios.post(VITE_CLOUDINARY_URL, file);
            setFormData({ ...formData, image: data.url })
            setIsLoading(false)


        } catch (error) {
            setIsLoading(false);
            setIsError(true)
        }
    }

    /* Fuction to Upload formData to Database */

    async function handleClick() {
        setIsLoading(true);
        try {
            const { data } = await axios.post(VITE_USER_BASE_URL + "/register", formData)
            localStorage.setItem("user", JSON.stringify(data.data)) //1
            setTimeout(() => {
                setIsLoading(false) //2
                navigate("/chats")
            }, 3000) // 3
        } catch (error) {
            setIsLoading(false);
            setIsError(true)
        }
    }
    return (


        <Stack spacing={"5"} >

            <Center borderRadius={'1rem'}>
                <Image w={200} h={200} src={formData.image} alt="ds" borderRadius={'50%'} />
            </Center>
            <Heading size={'md'}>All Fields</Heading>
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

            <Button
                onClick={handleClick}
                colorScheme={'cyan'}
                isLoading={isLoading}
                disabled={isError}
            >Create a new Account</Button>
        </Stack>


    )
}

export default SignUp