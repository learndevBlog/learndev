'use client'
import { Box, Tab, Tabs } from '@mui/material';

import React, { useEffect, useMemo, useState } from 'react';

import { Post, posts } from './post';
import { CustomTabPanel } from '../components/CustomTabPanel';
import { PostFrontView } from '../components/PostFrontView';
import { Category, categories } from './category';

// this method do a request to the backend
const getPosts = async () => {
  // the await new Promise is just to simulate a request to the backend
  // I want to test the skeleton loading when the page is loading
  // await new Promise(resolve => setTimeout(resolve, 2000));
  return posts;
}

// this method do a request to the backend
const getCategories = async () => {
  // the await new Promise is just to simulate a request to the backend
  // I want to test the skeleton loading when the page is loading
  // await new Promise(resolve => setTimeout(resolve, 2000));
  return categories; 
}

export const metatata = {
  title: 'page',
  description: ' page',
  keywords: 'page, nextjs, react',  
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  
  const handleChange = (event: React.ChangeEvent<{}>, categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };

    fetchPosts();
    fetchCategories();
  }, []);

  const postsByCategory = useMemo(() => {
    if (selectedCategory === 0) { // all categories
      return posts;
    } else if (selectedCategory) {
      return posts.filter(post => post.category.id === selectedCategory);
    } else{
      return [];
    }
  }, [posts, selectedCategory]);

  return (
    <main>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={selectedCategory} onChange={handleChange} aria-label="basic tabs example">
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
    </main>
  )
}

export default Page;