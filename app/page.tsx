'use client'
import { Box, Tab, Tabs } from '@mui/material';

import { Subscription } from './components/Subscription';
import React from 'react';
import { CustomTabPanel } from './components/CustomTabPanel';
import PostFrontView from './components/PostFrontView';
import { Header } from './components/Header';




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
      <Header />
      <Subscription />
      <div className='px-12'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="View All" {...a11yProps(0)} />
              <Tab label="Design" {...a11yProps(1)} />
              <Tab label="Development" {...a11yProps(2)} />
              <Tab label="Customer Support" {...a11yProps(3)} />
              <Tab label="Leadership" {...a11yProps(4)} />
              <Tab label="Management" {...a11yProps(5)} />
              <Tab label="Interviews" {...a11yProps(6)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className='flex items-center gap-4'>
              <PostFrontView image='/images/test.jpg' publishDate='10/01/2024' type='Products' />
              <PostFrontView image='/images/aws.jpeg' publishDate='10/01/2024' type='Cloud' />
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
