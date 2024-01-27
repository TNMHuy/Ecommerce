import styled from '@emotion/styled'
import React, { useState } from 'react'
import { FlexBox } from '../../../../../components/flex-box'
import { Alert, Box, Button, Rating, Snackbar } from '@mui/material'
import { setCart } from '../../../../../redux/slice/addTocart'
import { useDispatch, useSelector } from 'react-redux'
import img from '../../../../../assets/7.webp'
import Image from '../../../../../components/Image'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { Link } from 'react-router-dom'

const BoxWrapper = styled("div")(() => ({
  backgroundColor:'white',
  padding:'20px',
  marginTop:'50px',
  borderRadius:'8px',
  width: "100%",
  height:'400px'
}))
const StyledLink = styled(Box)(({  active_route }) => ({
  
  "&:hover": {
      color: `orange`,
  }
}))
const SearchProducts = ({products}) => {
  const { enqueueSnackbar } = useSnackbar()
  const cart = useSelector((state)=>state.addToCart)
  const dispatch = useDispatch()

  const handleAddToCart = (product,variant)=>{
    dispatch(setCart({product,quantity:1}))
    enqueueSnackbar('Added to Cart', { variant });

   }
  return (
    <FlexBox flex={'4 1 auto'}  >
        <FlexBox width='100%' display='grid' gridTemplateColumns='auto auto auto' gap='25px'>

        {
          products?.map((item,index)=>{
            console.log(item);
        return <BoxWrapper key={index}> 
                <Link to={'/cart-detail'}>
                  <Box width={'290px'}>
                  <Image width={'100%'} src={img}></Image>
                  <Box fontWeight={'600'}>{item.name}</Box> 
                </Box>
                </Link>
                <Rating name="read-only" value={4} readOnly />
                <Box display={'flex'} color={'red'} alignItems={'center'} justifyContent={'space-between'} >
                  <Box fontWeight={'600'} fontSize={'16px'}>{item.price.toLocaleString("en-US", {style:"currency", currency:"vnd"})}</Box>
                  <Box>
                    <StyledLink>
                      <Button variant='outlined'  onClick={()=>{handleAddToCart(item,'success')}} sx={{
                              height:'28px',width:'28px',fontSize:'25px',}}>
                        <Box mt={'-4px'} >+</Box>
                        </Button>
                      </StyledLink>
                      </Box>
                </Box>
                     
  
 

            </BoxWrapper>
          })
        }
       
        </FlexBox>

    </FlexBox>
  )
}

export default SearchProducts