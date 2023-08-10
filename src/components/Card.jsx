import { Button, Image,  Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card=({amount,img,checkoutHandler,name})=>{
    return(
        <VStack justifyContent="center" alignItems="flex-start" marginBlock={'5'} ml={'4'} mr={'max(auto,1)'} >
            <Image src={img} boxSize={'64'} objectFit={'cover'} marginInline={'auto'} />
            <Text overflowWrap={'break-word'}  >{name}</Text>
            <Text  marginInline={'5'} color={'blue.500'} fontWeight={'bold'} >₹{amount}</Text>
            <Button marginInline={'0.5'} onClick={()=>checkoutHandler({amount})} >Buy Now</Button>
            
        </VStack>
    )
}

export default Card ;