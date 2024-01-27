import { Box, Container, Rating } from '@mui/material'
import React from 'react'
import Image from '../components/Image'
import img from '../assets/7.webp'
import styled from '@emotion/styled'
const StyledImg = styled("div")(({ active_route }) => ({
    // border:'2px solid rgb(218, 225, 231)',
    height:'64px',
    width:'64px',
    backgroundColor:'white',
    borderRadius:'8px',
    position: "relative",
    transition: "color 150ms ease-in-out",
    border: active_route === "active" ? '2px solid red' : '2px solid rgb(218, 225, 231)',
    "&:hover": {
        border:'2px solid red',

    }
}))
const CartDetail = (product) => {
  return (
    <Container>
        
        <Box id='product-detail' display={'flex'} >
            <Box width={''} height={''} flexGrow={'1'} display={'flex'} flexDirection={'column'} justifyContent={'center'} >
                <Image src={img} ></Image>
                <Box display={'flex'} justifyContent={'center'}>
                    <StyledImg active_route border={'2px solid rgb(218, 225, 231)'} height={'64px'} borderRadius={'8px'}  width={'64px'} bgcolor={'white'}>
                        <Image height={'100%'} src={img}  ></Image>
                    </StyledImg>
                    <StyledImg active_route border={'2px solid rgb(218, 225, 231)'} height={'64px'} borderRadius={'8px'}  width={'64px'} bgcolor={'white'}>
                        <Image height={'100%'} src={img}  ></Image>
                    </StyledImg>
                    <StyledImg active_route border={'2px solid rgb(218, 225, 231)'} height={'64px'} borderRadius={'8px'}  width={'64px'} bgcolor={'white'}>
                        <Image height={'100%'} src={img}  ></Image>
                    </StyledImg>
                </Box>
            </Box>
            <Box flexGrow={'1'} display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Box fontWeight={'700'} fontSize={'30px'}>Police Gray Eyeglasses</Box>
                <Box>Brand : Xiaomi</Box>
                <Box display={'flex'} alignItems={'center'}  gap={'10px'}>
                    <Box>Rated</Box>
                    <Rating name="read-only" value={4} readOnly />(50)
                </Box>
                <Box color={'red'} fontWeight={'700'} fontSize={'25px'}>US$167.00</Box>
                <Box>Stock available</Box>
            </Box>
        </Box>
        <Box>
            <Box display={'flex'} gap={'20px'}>
                <Box>Description</Box>
                <Box>Review(3)</Box>
            </Box>
        </Box>
    </Container>
  )
}

export default CartDetail