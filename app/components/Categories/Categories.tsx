import CategoryCard from './CategoryCard'
import Image from 'next/image'

const categories = [
    {
        order: '01',
        category: 'Development',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        href: '/'
    },
    {
        order: '02',
        category: 'Design',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        href: '/'
    },
    {
        order: '03',
        category: 'Customer Support',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        href: '/'
    },
    {
        order: '04',
        category: 'Leadership',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        href: '/'
    },
]

const Categories = () => {
  return (
    <div className='w-full bg-neutral-high-light flex items-center justify-center py-16 h-screen'>
      <div className='flex w-full max-w-[1440px] gap-6 items-center'>
        <div className='flex flex-col w-full py-4'>
          <div className='flex flex-col gap-4 pb-4'>
            <span className='leading-default font-bold font-highlight text-xl'>Categories</span>
            <p className='font-base leading-default text-sm'>About what do you want to read?</p>
          </div>
          <div className='flex-1 w-full max-w-[776px] flex gap-4 flex-wrap'>
            {categories.map((category, index) => (
                <CategoryCard key={index} order={category.order} description={category.description} href={category.href} category={category.category} />
            ))}
          </div>
        </div>
        {/* <div>
            <Image src='/images/shapes/squareImage.svg' alt='square shape' width={720} height={720} className='bg-black' />
          </div> */}
        </div>
    </div>
  )
}

export default Categories
