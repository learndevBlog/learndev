'use client'
import { Card, CardMedia } from '@mui/material'
import React from 'react'
import { PostInfo } from './PostInfo'
import { PostType } from '@/app/posts/post'

const Post = ({post}: {post: PostType}) => {
  return (
    <div>
          <h1>{post.title}</h1>
          <Card>
            <CardMedia sx={{ height: 250 }} image={post.image} />
            <PostInfo post={post} />
          </Card>
    </div>
  )
}

export default Post
