import CategoryCard from './CategoryCard'

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
    <div className='w-full h-screen px-16 pb-16 pt-28 flex flex-col gap-6
        bg-square-shape bg-neutral-high-light bg-right-bottom-6 bg-no-repeat'>
      <div className='flex flex-col gap-4'>
        <span className='leading-default font-bold font-highlight text-xl'>Categories</span>
        <p className='font-base leading-default text-sm'>About what do you want to read?</p>
      </div>
      <div className='w-full max-w-[776px] flex gap-4 flex-wrap'>
            {categories.map((category, index) => (
                <CategoryCard key={index} order={category.order} description={category.description} href={category.href} category={category.category} />
            ))}
      </div>
    </div>
  )
}

export default Categories
