import { Card, CardMedia } from '@mui/material';
import React from 'react';
import { CustomLink } from '../../../components/CustomLink';

import { 
    ArrowUpRightIcon, 
} from '@heroicons/react/16/solid';
import tw from 'tailwind-styled-components';
import { PostType } from '../../post';
import { PostInfo } from './PostInfo';
import TextWrapOnLine from '@/app/components/TextWrapOnLine';


export const PostFrontView: React.FC<{ post: PostType }> = ({ post }) => {
    return (
        <Container>
            <Card>
                <CardMedia sx={{ height: 250 }} image={post.image} />
                <PostInfo post={post} />
            </Card>
            <SummaryContainer>
                <TextWrapOnLine wrapOnLine={1} className=' mt-5'>
                    <span className='font-bold text-lg'>
                        {post.title}
                    </span>
                </TextWrapOnLine>
                <TextWrapOnLine wrapOnLine={2} className='text-gray-700 text-md leading-6'>
                    {post.description}
                </TextWrapOnLine>
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
    max-w-[650px]
    mb-14
    w-full
`;

const SummaryContainer = tw.div`
    flex
    flex-col 
    gap-2 
    mt-2
    px-2
`