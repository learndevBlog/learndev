import { Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { CustomLink } from './CustomLink';
import { Noto_Sans_Georgian } from 'next/font/google'
import Image from 'next/image'
import { 
    ArrowUpRightIcon, 
} from '@heroicons/react/16/solid';
import tw from 'tailwind-styled-components';
import { Post } from '../posts/post';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const georgia = Noto_Sans_Georgian({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

export const PostFrontView: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <Container>
            <Card>
                <CardMedia sx={{ height: 200 }} image={post.image} />
                <StyledCardContent>
                    <div className='flex gap-2'>
                        {post.author.image ? 
                        <Image 
                            className='rounded-full' 
                            width={40} 
                            height={40} 
                            src={post.author.image} 
                            alt={post.author.name} 
                        /> : 
                        <UserCircleIcon className='w-10 h-10'/>}
                        <div className='flex flex-col'>
                            <span className='font-semibold'>
                                {post.author.name.length > 25 ? post.author.name.substring(0, 25) + '...' : post.author.name}
                            </span>
                            <span className='text-gray-500'>Software Engineer</span>
                        </div>
                       
                    </div>
                    <div>
                        <div >
                            {/* <TagIcon className='w-4 h-4'/>  */}
                            <span>{post.category.name}</span>
                        </div>
                        <InfoContainer  className='text-gray-500'>
                            <span>Published</span>
                            <span>{post.publishDate}</span>
                        </InfoContainer>
                    </div>
                   
                </StyledCardContent>
            </Card>
            <SummaryContainer>
                <span className={`${georgia.className} font-bold text-lg`}>
                    {post.title.length > 40 ? post.title.substring(0, 40) + '...' : post.title}
                </span>
                <DescriptionContainer 
                    style={{ 
                        display: '-webkit-box', 
                        WebkitLineClamp: 4, 
                        WebkitBoxOrient: 'vertical' 
                    }}
                    >
                    {post.description}
                </DescriptionContainer>
                {/* TODO nao estou gostando desses classnames gigantesco aqui */}
                <CustomLink classname='my-3 flex items-center font-semibold text-base' href={`post/${post.id}`}>
                    Read about it
                    <ArrowUpRightIcon className='h-5 w-5' />
                </CustomLink>
            </SummaryContainer>
        </Container>
    );
};

// TODO: quando fizer o responsive tem que mudar o tamanho do container
const Container = tw.div`
    w-[430px] 
`;

const StyledCardContent = tw(CardContent)`
    flex
    justify-between
    text-sm
`;

const SummaryContainer = tw.div`
    flex 
    flex-col 
    gap-2 
    mt-2
    px-2
`

const DescriptionContainer = tw.div`
    text-gray-700 
    leading-5 
    text-sm 
    overflow-hidden
    h-10
    text-ellipsis
`

const InfoContainer = tw.div`
    flex 
    gap-1 
    items-center    
`
