import Link from 'next/link'
import { CustomLink } from './components/CustomLink'
 
export default function NotFound() {
  return (
    <div className='px-12'>
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <CustomLink classname='text-blue-500' href="/">Return Home</CustomLink>
    </div>
  )
}