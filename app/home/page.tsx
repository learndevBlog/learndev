import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import Subscription from '../components/Subscription/Subscription'
import PostList from '../components/Post/PostList'


function HomePage() {
  
  return (
    <PageTemplate>
      <Banner />
      <Categories />
      <PostList />
      <Subscription />
    </PageTemplate>
  )}


export default HomePage
