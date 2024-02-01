import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

    const searchQuery = useSearchParams()[0];
    const referenceNumber = searchQuery.get("reference");

    console.log({ searchQuery });

    console.log(searchQuery.get("reference"));
    return (
        <Box>
            <VStack
                justifyContent={'center'}
                alignItems={'center'}
                h={'100vh'}
                fontSize={'2rem'}
            >
                <Heading>ORDER SUCCESSFUL</Heading>
                <Text>
                    Order ID: {referenceNumber}
                </Text>
            </VStack>
        </Box >
    )
}

export default PaymentSuccess
