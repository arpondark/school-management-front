import Image from "next/image"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-b dark:border-gray-700'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 dark:ring-gray-600 px-2 bg-white dark:bg-gray-800'>
        <Image src="/search.png" alt="" width={14} height={14} className="dark:invert"/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"/>
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <ThemeToggle />
        <div className='bg-white dark:bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer shadow-sm dark:shadow-none'>
          <Image src="/message.png" alt="" width={20} height={20} className="dark:invert"/>
        </div>
        <div className='bg-white dark:bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative shadow-sm dark:shadow-none'>
          <Image src="/announcement.png" alt="" width={20} height={20} className="dark:invert"/>
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 dark:bg-purple-600 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium text-gray-900 dark:text-white">Arpon</span>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
      </div>
    </div>
  )
}

export default Navbar