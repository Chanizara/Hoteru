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
      className="fixed w-full top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-amber-400/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-amber-500/20 hover:text-amber-400 focus:outline-2 focus:-outline-offset-1 focus:outline-amber-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-7 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-7 group-data-open:block" />
            </DisclosureButton>
          </div>
          
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
            {/* Logo */}
            <div className="flex shrink-0 items-center space-x-3 ml-12 lg:ml-0">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">HOTERU</h1>
                <p className="text-xs text-amber-400">Luxury Hotel & Resort</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:ml-10 lg:flex lg:items-center">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current 
                        ? 'bg-amber-500/20 text-amber-400' 
                        : 'text-white hover:bg-white/5 hover:text-amber-400',
                      'rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Book Now Button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="hidden lg:block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-4 pt-4 pb-6 bg-slate-900">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current 
                  ? 'bg-amber-500/20 text-amber-400' 
                  : 'text-white hover:bg-slate-800 hover:text-amber-400',
                'block rounded-lg px-4 py-3 text-base font-semibold transition-all duration-200',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold shadow-lg">
            BOOK NOW
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
