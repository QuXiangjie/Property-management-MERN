import { FaSearch } from 'react-icons/fa';




export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
       
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Haveadreamhome</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        
        <form className='bg-slate-100 p-3 flex rounded-lg items-center' >
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 '/>
            <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>

            <li className='hidden sm:inline text-slate-700 hover:underline'> <a href="/">Home</a></li>
           
            <li className='hidden sm:inline text-slate-700 hover:underline'>  <a href="/about">About</a></li>
            
            <li className='hidden sm:inline text-slate-700 hover:underline'>  <a href="/sign-in">Sign in</a></li>

        </ul>
        </div>
    </header>
  )
}
