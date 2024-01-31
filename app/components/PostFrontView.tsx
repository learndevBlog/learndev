import { Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { CustomLink } from './CustomLink';
import { Noto_Sans_Georgian } from 'next/font/google'
import { 
    ArrowUpRightIcon, 
    CalendarDaysIcon, 
    PencilSquareIcon, 
    TagIcon 
} from '@heroicons/react/16/solid';
import tw from 'tailwind-styled-components';
import { Post } from '../posts/post';

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
                    <div className='flex flex-col gap-1'>
                        <InfoContainer>
                            <PencilSquareIcon className='w-4 h-4'/> 
                            <span>
                                {post.author.length > 25 ? post.author.substring(0, 25) + '...' : post.author}
                            </span>
                        </InfoContainer>
                        <InfoContainer>
                            <CalendarDaysIcon className='w-4 h-4'/> 
                            <span>{post.publishDate}</span>
                        </InfoContainer>
                    </div>
                    <InfoContainer>
                        <TagIcon className='w-4 h-4'/> 
                        <span>{post.category.name}</span>
                    </InfoContainer>
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
    w-[400px] 
`;

const StyledCardContent = tw(CardContent)`
    flex
    items-start
    justify-between
    text-sm
    text-white
    bg-gray-900
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
    h-24
    text-ellipsis
`

const InfoContainer = tw.div`
    flex 
    gap-1 
    items-center    
`