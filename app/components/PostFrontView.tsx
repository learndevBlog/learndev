import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface PostFrontViewProps {
    image: string;
    publishDate: string;
    type: string;
}

const PostFrontView: React.FC<PostFrontViewProps> = ({ image, publishDate, type }) => {
    return (
        <Card sx={{ width: 400 }}>
            <CardMedia sx={{ height: 200 }} image={image} />
            <CardContent className='flex justify-between items-center'>
                <Typography variant="subtitle2" color="textSecondary">
                    {publishDate}
                </Typography>
                <Typography style={{color: 'gray'}}>
                    {type}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PostFrontView;