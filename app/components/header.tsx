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
    <HeaderContainer>
      <Nav>
        <LogoSection>
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
            <CustomLink classname='text-semibold' href="/">Home</CustomLink>
            <CustomDropdown label='products' state={product} setState={setProduct} classname='text-semibold'>
              <CustomLink href='#'>Product 1</CustomLink>
              <CustomLink href='#'>Product 2</CustomLink>
            </CustomDropdown>

            <CustomDropdown label='resources' state={resource} setState={setResource} classname='text-semibold'>
              <CustomLink href='#'>Resource 1</CustomLink>
              <CustomLink href='#'>Resource 2</CustomLink>
              <CustomLink href='#'>Resource 3</CustomLink>
            </CustomDropdown>

            <CustomLink href="/about" classname='text-semibold'>
              About Us
            </CustomLink>
          </MenuContainer>
        </LogoSection>

        <AuthSection>
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
        </AuthSection>
      </Nav>
    </HeaderContainer>
  )
}
   
const HeaderContainer = tw.header`
  w-full
  py-4
  gap-4
`

const Nav = tw.nav`
  flex
  items-center
  justify-between
`

const LogoSection = tw.section`
  flex
  items-center
  flex-1
  gap-4
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

const AuthSection = tw.section`
  flex  
  items-center
  gap-4
`