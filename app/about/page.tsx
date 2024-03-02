import React from 'react';
import tw from 'tailwind-styled-components';
import { Biography } from './components/Biography';
import { CREATORS } from './creators';

const AboutPage = () => {
    return (
        <Container>
           <section className="bg-[url('/images/office-1834294_1920.jpg')] bg-center bg-cover w-full h-72">
           </section>
           <section>
                <p className='leading-9 text-lg p-10'>
                Learndev is a technology blog conceived and maintained by Thiago and Daniel, two tech enthusiasts who are passionate about software development and the developer community. Hailing from Brazil, they created Learndev with the aim of providing a valuable resource to the global developer community. They strongly believe in the power of education and knowledge sharing, and it's this passion that drives each post they publish.
                </p>
           </section>
           <section>
                {CREATORS.map((creator, index) => (
                    <Biography key={index} creator={creator} />
                ))}
           </section>
        </Container>
    );
};

export default AboutPage;

const Container = tw.div`
    w-full
`;
