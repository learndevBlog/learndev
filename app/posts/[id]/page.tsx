
// server component able to use the next optimization features
import Head from 'next/head';
import { PostType, posts } from '../post';
import { Card, CardMedia } from '@mui/material';
import { PostInfo } from '@/app/posts/components/Post/PostInfo';
import Post from '@/app/posts/components/Post/Post';

export const metadata = {
  title: 'Post List Page',
  description: 'Page to list posts from learndev blog',
  keywords: 'learndev, dev, tech, blog, nextjs, react, python, aws, serverless, tailwindcss, typescript, graphql, hasura, postgres, prisma, vercel, netlify, aws-amplify, aws-cdk, aws-lambda, aws-s3, aws-cloudfront, aws-route53, aws-cognito, aws-dynamodb, aws-rds, aws-aurora, aws-ecs, aws-eks, aws-ecr, aws-elasticache, aws-elastic-beanstalk, aws-elastic-load-balancing, aws-elastic-file-system, aws-elastic-map-re',  
}

async function getPostById(id: string) {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  // throw new Error('Simulated backend error');
  return posts.find(post => post.id === id); 
}

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await getPostById(params.id);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>

      {post && (
        <Post post={post} />
      )}

    </>
  )
}

export default Page;
