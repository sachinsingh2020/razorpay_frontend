import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Card from './Card';
import axios from 'axios';
import { ram, prachi, siddhu, bhaiya, ashutosh } from "../extractor/extractor"


const Home = () => {

    const checkoutHandler = async (amount) => {
        console.log({ amount });

        const { data: { key } } = await axios.get('https://razorpay-backend-eta.vercel.app/api/getkey');

        const { data: { order } } = await axios.post(
            'https://razorpay-backend-eta.vercel.app/api/checkout',
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
            callback_url: "https://razorpay-backend-eta.vercel.app/api/paymentverification",
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
            p={"2rem 4rem"}
            display={'flex'}
            justifyContent={'center'}
        >
            <Stack
                direction={['column', 'row']}
                alignItems={'center'}
                justifyContent={'center'}
                flexWrap={'wrap'}
                width={['100%', '80%']}
            >
                <Card amount={10000} image={ram} productName={"Ram Kumar"} checkoutHandler={checkoutHandler} />
                <Card amount={5000} image={siddhu} productName={"Sudhanshu Vikram"} checkoutHandler={checkoutHandler} />
                <Card amount={500} image={prachi} productName={"Prachi Dev"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} image={ashutosh} productName={"Ashutosh Kumar"} checkoutHandler={checkoutHandler} />
                <Card amount={1000} image={bhaiya} productName={"Himanshu Singh"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    )
};

export default Home
