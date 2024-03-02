import tw from "tailwind-styled-components";
import { CustomLink } from "../../components/CustomLink";
import Image from 'next/image'
import { Creator } from "../creators";

export const Biography = ({creator}: {creator: Creator}) => {
    return (
        <section>
            <Divider></Divider>
            <div className='px-20 py-10 bg-white flex justify-between items-center'>
                <CreatorContainer>
                    <span className='text-3xl'>{creator.fullName}</span>
                    <div className='mt-5'>
                        <Image 
                            src={creator.image}
                            alt={creator.fullName} 
                            width={300}
                            height={300}
                        
                        />
                    </div>
                </CreatorContainer>
                <div className='w-5 h-64 bg-black'></div>
                <HistoryContainer className='w-80 text-lg leading-9'>
                    <p>
                        {creator.history}
                    </p>
                </HistoryContainer>
                <ExperiencesContainer className='w-96 text-lg leading-9'>
                    <ul className='mt-5 list-disc list-inside'>
                        {creator.experience.map((exp, index) => (
                            <li key={index} className='mt-1'>{exp}</li>
                        ))}
                        <ul className='flex gap-5'>
                            {creator.socialMedia.map((social, index) => (
                                <li key={index} className='mt-1'>
                                    <CustomLink href={social.link}>
                                        <Image width={50} height={50} src={social.src} alt={social.name} />
                                    </CustomLink>       
                                </li>
                            ))}
                        </ul>
                    </ul>
                </ExperiencesContainer>
            </div>
        </section>
    )
}


const HistoryContainer = tw.div`
    w-96
    bg-yellow-100
`;

const ExperiencesContainer = tw.div`
    w-96
    bg-gray-200
`; 

const CreatorContainer = tw.div`
    bg-green-200
`;

const Divider = tw.div`
    bg-black 
    h-5 
    w-1/3
`;