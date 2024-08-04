import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import { PostCard } from '../components/Post/PostCard'
import { Button } from '../components/Design/Button/Button'
import Subscription from '../components/Subscription/Subscription'

const posts  = [
  {
    banner: "/images/technology-3221099_640.jpg",
    category: "Development",
    author: {
      profilePic: '/images/solo-leveling.jpeg', 
      job: 'Software Engineer', 
      name: 'Thiago Bomfim'
    },
    post: {
      title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, 
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      created_date: "15/10/2024", 
      link: "/"
    }
  },
  {
    banner: "/images/technology-3221099_640.jpg",
    category: "Design",
    author: {
      profilePic: '/images/solo-leveling.jpeg', 
      job: 'Software Engineer', 
      name: 'Thiago Bomfim'
    },
    post: {
      title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, 
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      created_date: "15/10/2024", 
      link: "/"
    }
  },
  {
    banner: "/images/technology-3221099_640.jpg",
    category: "Customer Support",
    author: {
      profilePic: '/images/solo-leveling.jpeg', 
      job: 'Software Engineer', 
      name: 'Thiago Bomfim'
    },
    post: {
      title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, 
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      created_date: "15/10/2024", 
      link: "/"
    }
  },
  {
    banner: "/images/technology-3221099_640.jpg",
    category: "Leadership",
    author: {
      profilePic: '/images/solo-leveling.jpeg', 
      job: 'Software Engineer', 
      name: 'Thiago Bomfim'
    },
    post: {
      title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, 
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      created_date: "15/10/2024", 
      link: "/"
    }
  },
]

const categories = ['Design', 'Development', 'Customer Support', 'Leadership']

function HomePage() {
  return (
    <PageTemplate>
      <Banner />
      <Categories />
      {/* posts container */}
      <div className='p-16 flex flex-col justify-center items-center w-full gap-6'>
        {/* category filter */}
        <div className='flex gap-6'>
          <Button color='primary-outlined' label="All Posts" />
          {categories.map((category, index) => (
            <Button key={index} color='primary-outlined' label={category} />
          ))}
        </div>

        {/* post cards */}
        <div className='px-4 py-6 flex flex-wrap gap-6 w-full'>
          {posts.map((post, index) => (
            <PostCard
              key={index}
              banner={post.banner}
              category={post.category}
              author={post.author}
              post={post.post}
          />
          ))}
        </div>
        <div>
          <Button color='primary-outlined' label='See more posts' />
        </div>
      </div>
      <Subscription />
    </PageTemplate>
  )}


export default HomePage
