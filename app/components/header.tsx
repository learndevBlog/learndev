'use client'
import { Button, Typography } from '@mui/material';
import Image from 'next/image'

import * as React from 'react';
import tw from 'tailwind-styled-components';
import { CustomLink } from './CustomLink';
import { CustomDropdown } from './CustomDropdown';


export const Header = () => {
  const [product, setProduct] = React.useState(null);
  const [resource, setResource] = React.useState(null);

  const login = () => {
    console.log('login')
  }

  return (
    <Container>
      <Nav>
        <div className='flex items-center flex-1 gap-4'>
          <LogoContainer className=''>
            <Image
              src="/images/learndev-logo.png"
              width={50}
              height={50}
              alt="Learn dev log"
            />
            <Typography style={{ fontSize: '1.5rem' }}>Learndev</Typography>
          </LogoContainer>
          <MenuContainer>
            <CustomLink classname='text-semibold' href="/home">Home</CustomLink>
            <CustomDropdown label='products' state={product} setState={setProduct} classname='text-semibold'>
              <CustomLink href='/product-1'>Product 1</CustomLink>
              <CustomLink href='/product-2'>Product 2</CustomLink>
            </CustomDropdown>

            <CustomDropdown label='resources' state={resource} setState={setResource} classname='text-semibold'>
              <CustomLink href='/resource-1'>Resource 1</CustomLink>
              <CustomLink href='/resource-2'>Resource 2</CustomLink>
              <CustomLink href='/resource-3'>Resource 3</CustomLink>
            </CustomDropdown>

            <CustomLink href="/pricing" classname='text-semibold'>Pricing</CustomLink>
          </MenuContainer>
          </div>

        <AuthComponent className=''>
          <Button 
              color='primary' 
              size='medium' 
              variant="outlined" 
              href='#' 
              sx={{ borderRadius: 50, transform: 'none' }}
              style={{textTransform: 'none'}}
              > 
              Log In
            </Button>
          <Button 
              color='primary' 
              size='medium' 
              variant="contained" 
              href='#' 
              sx={{ borderRadius: 50, transform: 'none', backgroundColor: '#000' }}
              style={{textTransform: 'none'}}
              > 
              Sign Up
            </Button>
          {/* <CustomButton backgroundColor='#000' variant='contained'>Teste</CustomButton> */}
        </AuthComponent>
      </Nav>
    </Container>
  )
}
   
const Container = tw.div`
  px-12
  w-full
  py-4
  gap-4
`

const Nav = tw.nav`
  flex
  items-center
  justify-between
`

const LogoContainer = tw.div`
  flex
  items-center
  gap-4
`

const MenuContainer = tw.div`
  flex
  flex-1
  items-center
  gap-14
  ml-10
`

const AuthComponent = tw.div`
  flex  
  items-center
  gap-4
`
