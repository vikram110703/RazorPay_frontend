import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'


export const PaymentSuccess = () => {
  const searchQuery=useSearchParams()[0];
  const refferenceNumber=searchQuery.get('reference');

  return (
    <Box>
        <VStack justifyContent={'center'}marginInline={['6','auto']} h='100vh'>
            <Heading>
                Payment Done ! Order Recieved Successfully
            </Heading>
            <Text>
                Reference number/id : {refferenceNumber}
            </Text>

        </VStack>

    </Box>
  )
}
