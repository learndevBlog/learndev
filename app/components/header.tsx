'use client'
import { Button, Link, Menu, MenuItem, Typography } from '@mui/material';
import Image from 'next/image'

import * as React from 'react';
import tw from 'tailwind-styled-components';


export const Header = () => {
  const [product, setProduct] = React.useState(null);
  const [resource, setResource] = React.useState(null);

  const handleProductClick = (event: any) => {
    setProduct(event.currentTarget);
  };
  const handleResourceClick = (event: any) => {
    setResource(event.currentTarget);
  };

  const handleProductClose = () => {
    setProduct(null);
  };
  const handleResourceClose = () => {
    setResource(null);
  };

  return (
    <Container>
      <Nav>
        <div className='flex items-center gap-10'>
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
            <Link href="/">Home</Link>
            <div className='flex items-center gap-5'>
              <Link href="#" onClick={handleProductClick}>
                <Typography style={{ fontSize: '1rem', color:"black" }}>Products</Typography>
              </Link>
              <Menu
                id="basic-menu"
                anchorEl={product}
                open={Boolean(product)}
                onClose={handleProductClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleProductClose}>
                  <Typography style={{ fontSize: '1rem' }}>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleProductClose}>
                  <Typography style={{ fontSize: '1rem', color:"black" }}>My Account</Typography>
                </MenuItem>
              </Menu>
            </div>
            <div>
              <Link href="#" onClick={handleResourceClick}>
                <Typography style={{ fontSize: '1rem' }}>Resources</Typography>
              </Link>
              <Menu
                id="basic-menu"
                anchorEl={resource}
                open={Boolean(resource)}
                onClose={handleResourceClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleResourceClose}>
                  <Typography style={{ fontSize: '1rem' }}>Resource 1</Typography>
                </MenuItem>
                <MenuItem onClick={handleResourceClose}>
                  <Typography style={{ fontSize: '1rem' }}>Resource 2</Typography>
                </MenuItem>
              </Menu>
            </div>
            <Link href="/pricing">Pricing</Link>
          </MenuContainer>
          </div>

        <AuthComponent>
          <Button color='primary' size='medium' variant="text" href='#'>Log In</Button>
          <Button color='primary' size='medium' variant="contained" href='#'>Sign Up</Button>
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
  items-center
  gap-4
`

const AuthComponent = tw.div`
  
`
