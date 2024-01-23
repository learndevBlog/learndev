'use client'
import { Box, Tab, Tabs } from '@mui/material';

import { Subscription } from './components/Subscription';
import React from 'react';
import { CustomTabPanel } from './components/CustomTabPanel';
import { PostFrontView } from './components/PostFrontView';


export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

  return (
    <main className="">
      <Subscription />
      <div className='px-12'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab style={{textTransform: 'none'}} label="View All" {...a11yProps(0)} />
              <Tab style={{textTransform: 'none'}} label="Design" {...a11yProps(1)} />
              <Tab style={{textTransform: 'none'}} label="Development" {...a11yProps(2)} />
              <Tab style={{textTransform: 'none'}} label="Customer Support" {...a11yProps(3)} />
              <Tab style={{textTransform: 'none'}} label="Leadership" {...a11yProps(4)} />
              <Tab style={{textTransform: 'none'}} label="Management" {...a11yProps(5)} />
              <Tab style={{textTransform: 'none'}} label="Interviews" {...a11yProps(6)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className='flex items-center gap-4'>
              <PostFrontView
                author='Thiago Bomfim' image='/images/test.jpg' publishDate='10/01/2024' type='Products' 
                description="Nam rerum facilis vel nostrum veniam et enim omnis 33 animi voluptatem et earum laboriosam et odit dicta ut reiciendis aspernatur. Et soluta numquam ea quis quod eum cumque rerum sit pariatur nesciunt ut dolores temporibus. Eos deleniti nobis ab deserunt voluptas qui quam harum aut doloribus ipsa ab quibusdam quidem qui quod rerum sed aliquam quasi. 33 blanditiis consequatur non enim corporis At tempore vero et rerum vitae."
                title="How to develop a product from scratch"
                id='1'
                />
              <PostFrontView author='Thiago Bomfim' image='/images/aws.jpeg' publishDate='10/01/2024' type='Cloud' 
              description="Nam rerum facilis vel nostrum veniam et enim omnis 35 animi voluptatem et earum laboriosam et odit dicta ut reiciendis aspernatur. Et soluta numquam ea quis quod eum cumque rerum sit pariatur nesciunt ut dolores temporibus. Eos deleniti nobis ab deserunt voluptas qui quam harum aut doloribus ipsa ab quibusdam quidem qui quod rerum sed aliquam quasi. 33 blanditiis consequatur non enim corporis At tempore vero et rerum vitae."
              title="Amazon re:invent 2023"
              id='2'
              />
            </div>
          
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            item two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item Four
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Item Five
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            Item Six
          </CustomTabPanel>
        </Box>
      </div>
      
    </main>
  )
}
