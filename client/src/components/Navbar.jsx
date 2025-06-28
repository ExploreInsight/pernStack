import {Link, useResolvedPath} from 'react-router-dom'
import {ShoppingBagIcon, ShoppingCartIcon} from 'lucide-react'
import ThemeSelector from './ThemeSelector.jsx';
const Navbar = () => {
  const {pathname} = useResolvedPath();
  const isHome = pathname === '/';;
  const products = "989"
  return (
    <div className='bg-base-100/80 backdrop-blur-lg border-b border-base-content'>
      <div className='max-w-7xl mx-auto'>
        <div className="navbar px-4 min-h-[4rem]  ">
          {/* Logo */}
          <div className='flex-1'>
            <Link to='/' className='hover:opacity-80 transition-opacity'> 
              <div className='flex gap-2 items-center'>
                <ShoppingCartIcon className='size-9 text-primary' /> 
                <span className='font-semibold font-mono tracking-widest text-2xl 
                 bg-clip-text text-transparent bg-gradient-to-l from-primary to-secondary'>
                  POSGRESTORE
                </span>
              </div>
            </Link>
          </div>
          {/* Right Section */}
          <div className='flex items-center gap-4'>
            <ThemeSelector />
            {
              isHome && (
                <div className='indicator'>
                  <div className='p-1 rounded-full hover:bg-base-200 transition-colors'>
                    <ShoppingBagIcon className='size-5' />
                    <span className='badge badge-sm badge-primary indicator-item'>
                      {products.length}
                    </span>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar