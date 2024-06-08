
import Head from 'next/head';
import PostList from "./components/Post/PostList";
import { categories } from "./category";
import { posts } from "./post";
import { Subscription } from '../components/Subscription';
import { Avatar } from '../components/Design/Avatar/Avatar';
import { Button } from '../components/Design/Button/Button';
import { Card } from '../components/Design/Card/Card';
import { SnippetCard } from '../components/Posts/SnippetCard';


export const metadata = {
  title: 'Post List Page',
  description: 'Page to list posts from learndev blog',
  keywords: 'learndev, dev, tech, blog, nextjs, react, python, aws, serverless, tailwindcss, typescript, graphql, hasura, postgres, prisma, vercel, netlify, aws-amplify, aws-cdk, aws-lambda, aws-s3, aws-cloudfront, aws-route53, aws-cognito, aws-dynamodb, aws-rds, aws-aurora, aws-ecs, aws-eks, aws-ecr, aws-elasticache, aws-elastic-beanstalk, aws-elastic-load-balancing, aws-elastic-file-system, aws-elastic-map-re',  
}

async function getPosts() {
  // await new Promise(resolve => setTimeout(resolve, 1000));
  // throw new Error('Simulated backend error');
  return posts;
}

async function getCategories() {
  // await new Promise(resolve => setTimeout(resolve, 1000));
  // throw new Error('Simulated backend error');
  return categories; 
}

const Page = async () => {
  const posts = await getPosts();
  const categories = await getCategories();

  return (
    <div className='mb-12'>
    <div className='container flex gap-5 mb-8'>
      <div className="flex flex-col gap-5">
        {/* <Avatar profilePic='/images/solo-leveling.jpeg' size='sm'/> */}
        <Avatar profilePic='/images/solo-leveling.jpeg' size='md' userName='Thiago Bomfim'/>
        <Avatar profilePic='/images/solo-leveling.jpeg' userTitle='Software Engineer' size='lg' userName='João Pedro Roque'/>
        {/* <Avatar size='lg'/>
        <Avatar size='md'/> */}
        <Avatar size='sm'/>
      </div>
      <Button heroIcon='BellIcon' color='dark' label={"Try it on"} disabled={true}/>
      <Button heroIcon='BellIcon' color='primary-outlined' label={"Try it on"} disabled={true}/>
      <Button heroIcon='BellIcon' color='primary' label={"Try it on"}/>
      <Button heroIcon='ArrowLeftIcon' color='dark' label={"Try it on"}/>
      <Button heroIcon='ArrowRightIcon' color='dark-outlined' label={"Try it on"}/>
      <Button heroIcon='HomeIcon' color='primary-outlined' label={"Try it on"}/>
      

    </div>
    <div>
    <div className='flex gap-3  '>
      <SnippetCard 
        banner='/images/technology-3221099_640.jpg'
        category='Development'
        author={{
          profilePic: '/images/solo-leveling.jpeg', 
          job: 'Software Engineer', 
          name: 'Thiago Bomfim'
        }}
        post={{
          title: `Lorem ipsum dolor
      sit amet, consectetur
      adipiscing elit.`, 
          summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          created_date: "15/10/2024", 
          link: "/"
        }}
      />
      <SnippetCard 
        banner='/images/technology-3221099_640.jpg'
        category='Development'
        author={{
          profilePic: '/images/solo-leveling.jpeg', 
          job: 'Software Engineer', 
          name: 'Thiago Bomfim'
        }}
        post={{
          title: `Lorem ipsum dolor
      sit amet, consectetur
      adipiscing elit.`, 
          summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          created_date: "15/10/2024", 
          link: "/"
        }}
      />
      <SnippetCard 
        banner='/images/technology-3221099_640.jpg'
        category='Development'
        author={{
          profilePic: '/images/solo-leveling.jpeg', 
          job: 'Software Engineer', 
          name: 'Thiago Bomfim'
        }}
        post={{
          title: `Lorem ipsum dolor
      sit amet, consectetur
      adipiscing elit.`, 
          summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          created_date: "15/10/2024", 
          link: "/"
        }}
      />

    </div>
    <div className='flex items-center justify-center'>

      <Button color='primary-outlined' label={"See more posts"}/>
    </div>
    
      

  </div>
  </div>
  )
}

export default Page;
