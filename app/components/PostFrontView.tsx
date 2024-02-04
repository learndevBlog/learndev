import { Card, CardContent } from '@mui/material';
import React from 'react';
import { CustomLink } from './CustomLink';
import { Roboto, Noto_Sans_Georgian } from 'next/font/google'
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import tw from 'tailwind-styled-components';
import emotionStyled from '@emotion/styled';


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
        const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });

    return (
        <Container>
            <Card>
                <StyledCardContentContainer sx={{ background: `url(${image})`, height: 200, backgroundSize: 'cover', padding: '0 !important' }}>
                    <StyledCardContent className="flex justify-between">
                        <div className='flex flex-col gap-2'>
                            <span>{author}</span>
                            <span style={{ fontWeight: 300 }}>{formattedDate}</span>
                        </div>
                        <span>{type}</span>
                    </StyledCardContent>
                </StyledCardContentContainer>
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

const StyledCardContentContainer = tw(CardContent)`
    flex
    flex-col 
    justify-end
    text-sm  
`;

const StyledCardContent = emotionStyled.div`
    padding: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    color: white;
    font-weight: 700;
    backdrop-filter: blur(5px);
`

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

