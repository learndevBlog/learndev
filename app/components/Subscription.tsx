'use client'
import { Typography, TextField, Button } from "@mui/material";
import tw from "tailwind-styled-components";

export const Subscription = () => {
    const handleSubscribe = () => {
        // Logic to handle subscription
        console.log('subscription')
    };

    return (
        <Container>
            <div>
                <Typography style={{ fontSize: '3rem' }}>Learndev Blog</Typography>
                <div className="mt-5 flex items-center">
                    <TextField label="Email" variant="outlined" />
                    <Button variant="outlined" onClick={handleSubscribe}>Subscribe</Button>
                </div>
            </div>
            <div>
                <p><Typography style={{ fontSize: '1rem', color: 'gray' }}>New products features, the latest in</Typography></p>
                <p><Typography style={{ fontSize: '1rem', color: 'gray'}}>technology, solutions and updates</Typography></p>
            </div>
        </Container>
    );
};


const Container = tw.div`
    h-64
    px-12
    flex
    justify-between
    items-center
`