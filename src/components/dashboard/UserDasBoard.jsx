import React from 'react'
import { Box } from '@mui/material'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PaymentIcon from '@mui/icons-material/Payment';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { FlexBox } from '../flex-box';
const UserDasboard = () => {
  return (
    <FlexBox sx={{
        display: 'flex',
        flex:'300px 0 0',
        flexDirection:'column',
        gap:'60px'
    }} >
      <Box display={'flex'} flexDirection={'column'} gap={3}>
          <Box color={'#7d879c'} textTransform={'uppercase'}>
          Dashboard
            </Box >
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
              <Box display={'flex'} gap={1} >
              <ShoppingBagOutlinedIcon fontSize='small'/>
                Order
                </Box>
              <Box> 5</Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
              <Box display={'flex'} gap={1} >
              <FavoriteBorderOutlinedIcon fontSize='small'/>
                Wish List
                </Box>
              <Box> 20</Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
              <Box display={'flex'} gap={1} >
              <  ContactSupportIcon  fontSize='small'/>
                Support Tickets
                </Box>
              <Box> 1</Box>
            </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={3}>
          <Box color={'#7d879c'} textTransform={'uppercase'}>
          Account Settings
            </Box >
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
              <Box display={'flex'} gap={1} >
              <PersonSharpIcon fontSize='small' />
                Profile Info
                </Box>
              <Box> 3</Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
              <Box display={'flex'} gap={1} >
              <MapsHomeWorkIcon fontSize='small'/>
                Addresses
                </Box>
              <Box> 16</Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
              <Box display={'flex'} gap={1} >
              <  PaymentIcon  fontSize='small'/>
                Payment Methods
                </Box>
              <Box> 4</Box>
            </Box>
      </Box>
        
 </FlexBox>
  )
}

export default UserDasboard