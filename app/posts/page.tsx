
// server component able to use the next optimization features
import Head from 'next/head';
import PostList from "../components/Post/PostList";
import { categories } from "./category";
import { posts } from "./post";


export const metadata = {
  title: 'Post List Page',
  description: 'Page to list posts from learndev blog',
  keywords: 'learndev, dev, tech, blog, nextjs, react, python, aws, serverless, tailwindcss, typescript, graphql, hasura, postgres, prisma, vercel, netlify, aws-amplify, aws-cdk, aws-lambda, aws-s3, aws-cloudfront, aws-route53, aws-cognito, aws-dynamodb, aws-rds, aws-aurora, aws-ecs, aws-eks, aws-ecr, aws-elasticache, aws-elastic-beanstalk, aws-elastic-load-balancing, aws-elastic-file-system, aws-elastic-map-re',  
}

async function getPosts() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('Simulated backend error');
  return posts;
}

async function getCategories() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('Simulated backend error');
  return categories; 
}

const Page = async () => {
  const posts = await getPosts();
  const categories = await getCategories();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <PostList posts={posts} categories={categories} />
    </>
  )
}

export default Page;
