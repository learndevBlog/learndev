'use client'
import { Button } from '@mui/material';
import Image from 'next/image'

import * as React from 'react';
import tw from 'tailwind-styled-components';
import { CustomLink } from './CustomLink';
import { CustomDropdown } from './CustomDropdown';


export const Header = () => {
  const [product, setProduct] = React.useState(null);
  const [resource, setResource] = React.useState(null);

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
            Learndev
          </LogoContainer>
          <MenuContainer>
            <CustomLink classname='text-semibold' href="/home">Home</CustomLink>
            <CustomDropdown label='products' state={product} setState={setProduct} classname='text-semibold'>
              <CustomLink href='#'>Product 1</CustomLink>
              <CustomLink href='#'>Product 2</CustomLink>
            </CustomDropdown>

            <CustomDropdown label='resources' state={resource} setState={setResource} classname='text-semibold'>
              <CustomLink href='#'>Resource 1</CustomLink>
              <CustomLink href='#'>Resource 2</CustomLink>
              <CustomLink href='#'>Resource 3</CustomLink>
            </CustomDropdown>

            <CustomLink href="#" classname='text-semibold'>Pricing</CustomLink>
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
  gap-8
  ml-10
`

const AuthComponent = tw.div`
  flex  
  items-center
  gap-4
`
