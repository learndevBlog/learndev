'use client'
import React, { useState } from 'react'
import { PostCard } from './PostCard'
import { Button } from '../Design/Button/Button'

const categories = ['All Posts', 'Design', 'Development', 'Customer Support', 'Leadership']

const posts = categories.map((category, index) => ({
  banner: `/images/technology-3221099_640.jpg`,
  category,
  author: {
    profilePic: '/images/solo-leveling.jpeg',
    job: 'Software Engineer',
    name: `Thiago Bomfim`
  },
  post: {
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. (${category})`,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    created_date: "15/10/2024",
    link: "/"
  }
}))

const PostList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  const filteredPosts = selectedCategory === 'All Posts'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  return (
    <div className='py-12 flex flex-col justify-center items-center w-full'>
      {/* Category Filter */}
      <div className='w-full max-w-[1440px] bg-white flex flex-col gap-6'>
        <div className='flex justify-center'>
          <div className='flex flex-wrap bg-neutral-high-light px-4 py-1 rounded-md items-center justify-center'>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 flex items-center justify-center ${selectedCategory === category ? 'border rounded-sm bg-primary-pure' : ''}`}
              >
                <span className={`font-base text-xs leading-lg ${selectedCategory === category ? 'text-neutral-high-pure' : 'text-neutral-low-pure'}`}>
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Post Cards */}
        <div className='px-4 xl:px-8 2xl:px-0 py-6 flex flex-wrap gap-6 w-full items-center justify-center xl:justify-start xl:items-start'>
          {filteredPosts.map((post, index) => (
            <PostCard
              key={index}
              banner={post.banner}
              category={post.category}
              author={post.author}
              post={post.post}
            />
          ))}
        </div>

        <div className='flex justify-center'>
          <Button color='primary-outlined' label='See more posts' />
        </div>
      </div>
    </div>
  )
}

export default PostList
