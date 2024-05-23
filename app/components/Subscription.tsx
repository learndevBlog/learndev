import { TextField, Button } from "@mui/material";
import tw from "tailwind-styled-components";
import PageTitle from "./PageTitle";

export const Subscription = () => {
    const handleSubscribe = () => {
        // Logic to handle subscription
        console.log('subscription')
    };

    return (
        <Container>
            <PageTitle>Learndev Blog</PageTitle>
            <div className="mt-5 flex items-center w-1/3">
                <TextField 
                    fullWidth 
                    label="Email" 
                    variant="standard" 
                />
                {/* <Button 
                    color='primary-pure' 
                    size='medium' 
                    variant="contained" 
                    href='#' 
                    sx={{ borderRadius: 50, transform: 'none', backgroundColor: '#000' }}
                    style={{textTransform: 'none'}}
                    > 
                    Subscribe
                </Button> */}
                <button className="text-feedback-helper-light text-display">TESTE</button>
            </div>
        </Container>
    );
};


const Container = tw.section`
    h-32
    flex
    flex-col
`