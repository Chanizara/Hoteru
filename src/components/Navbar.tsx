import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'HOME', href: '#home', current: true },
  { name: 'ROOMS', href: '#rooms', current: false },
  { name: 'FACILITIES', href: '#facilities', current: false },
  { name: 'GALLERY', href: '#gallery', current: false },
  { name: 'ABOUT', href: '#about', current: false },
  { name: 'CONTACT', href: '#contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed w-full top-0 z-50"
    >
      <div className="mx-auto ml-10 mr-10 px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-amber-400 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-7 w-7 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-7 w-7 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          
          {/* Logo - centered on mobile, left on desktop */}
          <div className="flex flex-1 items-center justify-center lg:justify-start">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 64 64" fill="currentColor">
                <path d="M22.442 42.242h19.116v4.32H22.442z"/>
                <path d="M52 2H12C6.477 2 2 6.478 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.522-4.477-10-10-10m-4.018 50H16.018V36.805h31.965V52zM20.85 34.645v-5.14h22.299v5.14zm30.175-1.954S43.111 30.1 32.001 21.162C20.889 30.1 12.975 32.691 12.975 32.691L9.777 26.6C22.031 20.641 32.001 12 32.001 12s9.969 8.641 22.222 14.6z"/>
              </svg>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-white tracking-tight drop-shadow-lg">HOTERU</h1>
                <p className="text-xs text-amber-400 drop-shadow-md">Luxury Hotel & Resort</p>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current 
                    ? 'text-amber-400' 
                    : 'text-white hover:text-amber-400',
                  'px-4 py-2 text-sm font-semibold transition-all duration-200 drop-shadow-lg',
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Book Now Button */}
          <div className="flex items-center">
            <button
              type="button"
              className="hidden lg:block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2.5 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-4 pt-2 pb-4 bg-slate-900/95 backdrop-blur-md">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current 
                  ? 'text-amber-400' 
                  : 'text-white hover:text-amber-400',
                'block px-4 py-3 text-base font-semibold transition-all duration-200',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold shadow-lg">
            BOOK NOW
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
