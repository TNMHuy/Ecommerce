import styled from '@emotion/styled'
import React from 'react'
import { FlexBox } from '../../../../../components/flex-box'
import { Box, Button } from '@mui/material'
import { setCart } from '../../../../../redux/slice/addTocart'
import { useDispatch, useSelector } from 'react-redux'
const BoxWrapper = styled("div")(() => ({
  backgroundColor:'white',
  padding:'20px',
  marginTop:'50px',
  borderRadius:'8px',
  width: "100%",
  height:'400px'
}))

const SearchProducts = ({products}) => {
  const cart = useSelector((state)=>state.addToCart)
    const dispatch = useDispatch()
   const handleAddToCart = (product)=>{
    dispatch(setCart({product,quantity:1}))
   }
  return (
    <FlexBox flex={'4 1 auto'}  >
        <FlexBox width='100%' display='grid' gridTemplateColumns='auto auto auto' gap='25px'>

        {
          products?.map((item,index)=>{
        return     <BoxWrapper key={index}> 
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                <Button onClick={()=>{handleAddToCart(item)}}>Add to cart</Button>
            </BoxWrapper>
          })
        }
       
        </FlexBox>
        
    </FlexBox>
  )
}

export default SearchProducts