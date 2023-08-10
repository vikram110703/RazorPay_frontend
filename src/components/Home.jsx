import React from 'react';
import axios from 'axios';

import { Box, Heading, Stack } from '@chakra-ui/react';
import img1 from '../assets/laptop1.png';
import img2 from '../assets/laptop2.jpg';
import Card from './Card.jsx';
import { server } from '../index.js';


export const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get(`${server}/getkey`);

        const { data: { order } } = await axios.post(`${server}/checkout`, {
            amount,
        });
        // console.log("key->", key);
        // console.log("order->", order.amount);

        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: Number(order.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Vikram Saini", //your business name
            description: "Test Transaction",
            image: "https://avatars.githubusercontent.com/u/99256244?v=4",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: `${server}/paymentverification`,
            prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                name: "User", //your customer's name
                email: "user@example.com",
                contact: "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            notes: {
                "address": "Razorpay Corporate RNT Hostal "
            },
            theme: {
                "color": "#121111"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();

    };

    return (
        <Box>
            <Heading marginInline={'0'} color={'blue.100'} bgColor={'blue.700'} w='full'
                p={'1'} pl={'4'} userSelect={'none'}
            >Welcome to My Store</Heading>
            <Stack direction={['column', 'row']} gap={'3'} justifyContent={'center'} >
                <Card amount={1000} img={img1} checkoutHandler={checkoutHandler}
                    name={'fake Surface Go Intel Core i5 12.4 inches Touchscreen Laptop (8GB Memory, Windows, 128GB SSD,Platinum), 1.11kg'}
                />
                <Card amount={81000} img={img1} checkoutHandler={checkoutHandler}
                    name={'fake Surface Go Intel Core i5 12.4 inches Touchscreen Laptop (8GB Memory, Windows, 128GB SSD,Platinum), 1.11kg'}
                />
                <Card amount={300000} img={img2} checkoutHandler={checkoutHandler}
                    name={'fake 2023 MacBook Pro Laptop M2 Max chip with 12‑core CPU and 38‑core GPU: 33.74 cm (16.2-inch), 32GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Space Grey'}
                />
                <Card amount={300000} img={img2} checkoutHandler={checkoutHandler}
                    name={'fake 2023 MacBook Pro Laptop M2 Max chip with 12‑core CPU and 38‑core GPU: 33.74 cm (16.2-inch), 32GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Space Grey'}
                />

            </Stack>

        </Box>
    )
}
