<<<<<<< Updated upstream
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
=======
import './App.css';
import navbar from './assets/layout/navbar/navbar';
import SignIn from './assets/layout/Pages/SignIn';


function App() {
  return (
  //navigation bar
 
  <div class="relative">
  <header class="absolute inset-x-0 top-0 z-10 w-full">
      <div class="px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 lg:h-20">
              <div class="flex-shrink-0">
                  <a href="#" title="" class="flex">
                      <img class="w-auto h-8" src="images/Yo-clinic Logo.png" alt="" />
                  </a>
              </div>
 
              <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                  
                  <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
 
                  
                  <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
              </button>
 
              <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                  <a href="#" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Home </a>
 
                  <a href="#" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Pharmacy </a>
 
                  <a href="#" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Departments </a>
 
                  <a href="#" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Appointments </a>
 
                  <a href="#" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Services </a>
 
                  <a href="./SignIn" title="SignIn" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600" role="button"> Sign In </a>
                  <a href="./SignIn" title="SignIn" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600" role="button"> Sign Up </a>
              </div>
          </div>
      </div>
  </header>
 
  <section class="bg-blue-50 overflow-hidden">
  <div class="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
      <div class="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
          <div class="absolute bottom-0 right-0 hidden lg:block">
              <img class="object-contain w-auto h-48" src="public/images/Doctor.png" alt="" />
          </div>
 
          <div class="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 class="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                  Get it done.<br />
                  Fast, Easy.
              </h1>
              <p class="mt-8 text-xl text-black">We help you to make your life easier & healthier. At Yo-Clinic, our Doctors are there to care for your health</p>
 
              <form action="#" method="POST" class="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                  <div class="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                      <div class="flex flex-col items-start sm:flex-row">
                          <div class="flex-1 w-full min-w-0">
                              <div class="relative text-gray-400 focus-within:text-gray-600">
                                  <label for="email" class="sr-only"></label>
                                  <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      placeholder="Enter email to get started"
                                      class="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                                      required=""
                                  />
                              </div>
                          </div>
 
                          <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600">
                              Sign In
                          </button>
                      </div>
                  </div>
              </form>
              <p class="mt-5 text-base text-black">Instant access to our health services. Don't stand in Queus </p>
          </div>
 
          <div class="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
              <img class="w-32 h-32 md:w-40 md:h-40" src="public/images/Yo-clinic Logo.png" alt="" />
          </div>
      </div>
 
      <div class="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
          <div class="absolute inset-0">
              <img class="object-cover w-full h-full scale-150" src="public/images/Doctor.png" alt="" />
          </div>
 
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
 
          <div class="absolute bottom-0 left-0">
              <div class="p-4 sm:p-6 lg:p-8">
                  <div class="flex items-center">
                      <svg class="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                      </svg>
                      <h2 class="font-bold text-white text-7xl ml-2.5">Open 24 Hrs</h2>
                  </div>
                  <p class="max-w-xs mt-1.5 text-xl text-white">People trust Yo-clinic</p>
              </div>
          </div>
      </div>
  </div>
 </section>
 
 
 <section class="py-10 bg-blue-900 sm:pt-16 lg:pt-24">
     <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
         <div class="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
             <div>
                 <img class="w-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg" alt="" />
 
                 <ul class="mt-8 space-y-4">
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> About </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Features </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Works </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Career </a>
                     </li>
                 </ul>
             </div>
 
             <div>
                 <p class="text-lg font-semibold text-white">Help</p>
 
                 <ul class="mt-8 space-y-4">
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Customer Support </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Delivery Details </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Terms & Conditions </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Privacy Policy </a>
                     </li>
                 </ul>
             </div>
 
             <div>
                 <p class="text-lg font-semibold text-white">Resources</p>
 
                 <ul class="mt-8 space-y-4">
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Free eBooks </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Development </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Ambulance </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Departments </a>
                     </li>
                 </ul>
             </div>
 
             <div>
                 <p class="text-lg font-semibold text-white">Extra Links</p>
 
                 <ul class="mt-8 space-y-4">
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Customer Support </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Delivery Details </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Terms & Conditions </a>
                     </li>
 
                     <li>
                         <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Privacy Policy </a>
                     </li>
                 </ul>
             </div>
         </div>
 
         <div class="mt-20 md:mt-28 2xl:mt-32">
             <div class="lg:flex lg:items-center lg:justify-between">
                 <div class="sm:flex sm:items-center sm:justify-start sm:space-x-8">
                     <ul class="flex items-center justify-start space-x-8">
                         <li>
                             <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                 <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                     <path
                                         d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                     ></path>
                                 </svg>
                             </a>
                         </li>
 
                         <li>
                             <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                 <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                     <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                 </svg>
                             </a>
                         </li>
 
                         <li>
                             <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                 <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                     <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                     <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                     <path
                                         d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                     ></path>
                                 </svg>
                             </a>
                         </li>
 
                         <li>
                             <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                 <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                     <path
                                         fill-rule="evenodd"
                                         clip-rule="evenodd"
                                         d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                     ></path>
                                 </svg>
                             </a>
                         </li>
                     </ul>
 
                     <ul class="flex flex-wrap items-center justify-start mt-5 gap-x-8 sm:mt-0 gap-y-3">
                         <li>
                             <a href="#" title="" class="text-sm text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Appointments </a>
                         </li>
 
                         <li>
                             <a href="#" title="" class="text-sm text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Terms & Conditions </a>
                         </li>
 
                         <li>
                             <a href="#" title="" class="text-sm text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Support </a>
                         </li>
                     </ul>
                 </div>
 
                 <p class="mt-6 text-sm text-blue-200 lg:mt-0">© Copyright 2024, All Rights Reserved by Harrison Da Viinci</p>
             </div>
         </div>
     </div>
 </section>

 
 </div>

  );
>>>>>>> Stashed changes
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Sign out
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
