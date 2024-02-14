'use client';
import { Box, Tab, Tabs } from '@mui/material';
import React, { useMemo, useState } from 'react';

import { CustomTabPanel } from '../CustomTabPanel';
import { PostFrontView } from './PostFrontView';
import { PostType } from '../../posts/post';
import { Category } from '../../posts/category';

const PostList = ({posts, categories}: {posts: PostType[], categories: Category[]}) => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);

    const postsByCategory = useMemo(() => {
      if (!posts) return [];
      if (selectedCategory === 0) { // all categories
        return posts;
      } else {
        return posts.filter(post => post.category.id === selectedCategory);
      }
    }, [posts, selectedCategory]);
  
    const handleChange = (event: React.ChangeEvent<{}>, categoryId: number) => {
      setSelectedCategory(categoryId);
    };

    return (
      <div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={selectedCategory} onChange={handleChange} aria-label="basic tabs example">
            <Tab 
              key={0} 
              style={{textTransform: 'none'}} 
              label="All"
            />
            {categories.map((category: Category) =>
              <Tab 
                key={category.id} 
                style={{textTransform: 'none'}} 
                label={category.name}
              />
            )}
          </Tabs>
        </Box>
        <CustomTabPanel value={selectedCategory} index={selectedCategory}>
          <div className='flex justify-between flex-wrap w-full mt-5'>
            {postsByCategory.map((post: PostType) => (
              <PostFrontView
                key={post.id}
                post={post}
              />
            ))}
          </div>
        </CustomTabPanel>
    </div>
  )
}

export default PostList
