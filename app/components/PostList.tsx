'use client';
import { Box, Tab, Tabs } from '@mui/material';
import React, { useMemo, useState } from 'react';

import { CustomTabPanel } from './CustomTabPanel';
import { PostFrontView } from './PostFrontView';
import { Post } from '../posts/post';
import { Category } from '../posts/category';

const PostList = ({posts, categories}: {posts: Post[], categories: Category[]}) => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);

    const postsByCategory = useMemo(() => {
      if (!posts) return [];
      if (selectedCategory === 0) { // all categories
        return posts;
      } else if (selectedCategory) {
        return posts.filter(post => post.category.id === selectedCategory);
      } else{
        return [];
      }
    }, [posts, selectedCategory]);
  
    const handleChange = (event: React.ChangeEvent<{}>, categoryId: number) => {
      setSelectedCategory(categoryId);
    };

    return (
        <div>
          <Box sx={{ width: '100%' }}>
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
                <div className='flex items-center gap-4 flex-wrap w-full'>
                  {postsByCategory.map((post: Post) => (
                    <PostFrontView
                      key={post.id}
                      post={post}
                    />
                  ))}
                </div>
              </CustomTabPanel>
          </Box>
        </div>
      )
}

export default PostList
