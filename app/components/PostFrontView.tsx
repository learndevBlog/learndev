import { Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { CustomLink } from './CustomLink';
import { Roboto, Poppins, Noto_Sans_Georgian } from 'next/font/google'
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import tw from 'tailwind-styled-components';


const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
  })

  const georgia = Noto_Sans_Georgian({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
  })

interface PostFrontViewProps {
    id: string;
    title: string;
    description: string;
    author: string;
    image: string;
    publishDate: string;
    type: string;
}

export const PostFrontView: React.FC<PostFrontViewProps> = ({ 
        author, 
        image, 
        publishDate, 
        type,
        description,
        title,
        id
    }) => {
    return (
        <Container>
            <Card>
                <CardMedia sx={{ height: 200 }} image={image} />
                <StyledCardContent>
                    <div className='flex flex-col gap-2'>
                        <span>{author}</span>
                        <span>{publishDate}</span>
                    </div>
                    <span>{type}</span>
                </StyledCardContent>
            </Card>
            <SummaryContainer>
                <span className={`${georgia.className} font-bold text-lg`}>{title}</span>
                <DescriptionContainer 
                    style={{ 
                        display: '-webkit-box', 
                        WebkitLineClamp: 4, 
                        WebkitBoxOrient: 'vertical' 
                    }}
                    contentEditable
                    >
                    {description}
                </DescriptionContainer>
                <CustomLink classname='mt-5 flex items-center font-semibold text-base' href={`post/${id}`}>
                    Read about it
                    <ArrowUpRightIcon className='h-5 w-5' />
                </CustomLink>
            </SummaryContainer>
            
        </Container>
    );
};

const Container = tw.div`
    max-w-[400px] 
    flex-1
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
    mt-5
`

const DescriptionContainer = tw.div`
    text-gray-700 
    leading-5 
    text-sm 
    overflow-hidden
`