import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import ram from "../assets/ram_pic.jpg";
import bhaiya from "../assets/bhaiya.jpg";
import ashutosh from "../assets/ashutosh_pic.jpg";
import Card from './Card';
import axios from 'axios';


const Home = () => {

    const checkoutHandler = async (amount) => {
        console.log({ amount });

        const { data: { key } } = await axios.get('http://localhost:4000/api/getkey');

        const { data: { order } } = await axios.post(
            'http://localhost:4000/api/checkout',
            { amount }
        )

        const options = {
            key: key,
            amount: order.amount,
            currency: "INR",
            name: "Sac Wac Corporation",
            description: "Test Transaction",
            image: "https://avatars.githubusercontent.com/u/87107956?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };


        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box
            m={"2rem 4rem"}
        >
            <Stack
                direction={['column', 'row']}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Card amount={5000} image={ram} productName={"Ram Kumar"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} image={ashutosh} productName={"Ashutosh Kumar"} checkoutHandler={checkoutHandler} />
                <Card amount={1000} image={bhaiya} productName={"Himanshu Singh"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    )
};

export default Home
