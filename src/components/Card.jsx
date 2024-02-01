import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({ amount, image, productName, checkoutHandler }) => {

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            fontWeight={'bold'}
            border={'2px solid black'}
            borderRadius={'10px'}
            m={'0 1rem'}
        >
            <Image
                boxSize={['300px', '200px']}
                objectFit="cover"
                src={image} alt={productName} />
            <Text
                mt={'.5rem'}
            >{productName}</Text>
            <Text
                mt={'.5rem'}
            >Rs. {amount}</Text>
            <Button
                mt={'.5rem'}
                mb={'.5rem'}
                borderRadius={'10px'}
                bg={'#015898'}
                color={'white'}
                onClick={() => checkoutHandler(amount)}
                _hover={{
                    bg: '#015898',
                    color: 'white',
                    textDecoration: 'none'
                }}
            >Buy Now</Button>
        </Box>
    )
}

export default Card
