import { Card, CardMedia } from '@mui/material';
import React from 'react';
import { CustomLink } from '../CustomLink';

import { 
    ArrowUpRightIcon, 
} from '@heroicons/react/16/solid';
import tw from 'tailwind-styled-components';
import { PostType } from '../../posts/post';
import { PostInfo } from './PostInfo';


export const PostFrontView: React.FC<{ post: PostType }> = ({ post }) => {
    return (
        <Container>
            <Card>
                <CardMedia sx={{ height: 250 }} image={post.image} />
                <PostInfo post={post} />
            </Card>
            <SummaryContainer>
                <span className='font-bold text-lg mt-5'>
                    {post.title.length > 40 ? post.title.substring(0, 40) + '...' : post.title}
                </span>
                <DescriptionContainer 
                    style={{ 
                        display: '-webkit-box', 
                        WebkitLineClamp: 4, 
                        WebkitBoxOrient: 'vertical' 
                    }}
                    >
                    {post.description.length > 150 ? post.description.substring(0, 150) + '...' : post.description}
                </DescriptionContainer>
                <CustomLink classname='my-3 flex items-center font-semibold text-base' href={`posts/${post.id}/`}>
                    Read about it
                    <ArrowUpRightIcon className='h-5 w-5' />
                </CustomLink>
            </SummaryContainer>
        </Container>
    );
};

// TODO quando fizer o responsive tem que mudar o tamanho do container
const Container = tw.div`
    w-[650px]
    mb-14
`;

const SummaryContainer = tw.div`
    flex
    flex-col 
    gap-2 
    mt-2
    px-2
    h-40
`

const DescriptionContainer = tw.div`
    text-gray-700 
    leading-5 
    text-md
    overflow-hidden
    text-ellipsis
    leading-6
    h-32
`

