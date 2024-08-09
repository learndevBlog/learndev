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
    <div className='p-16 flex flex-col justify-center items-center w-full gap-6'>
      {/* Category Filter */}
      <div className='w-full flex justify-center'>
        <div className='flex bg-neutral-high-light px-4 py-1 rounded-md'>
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
      <div className='px-4 py-6 flex flex-wrap gap-6 w-full'>
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

      <div>
        <Button color='primary-outlined' label='See more posts' />
      </div>
    </div>
  )
}

export default PostList
