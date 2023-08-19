import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Contact from '../pages/contact';
import ChartsANDmaps from '../pages/chartsANDmaps';

type MenuItem = {
    name : string;
    component: string;
    icon : string
}

function Sidebar() {
  
  const [open,setOpen] = useState<boolean>(false);
  const menu: MenuItem[] = [
        {name:"Contacts",component:'contact',icon:"fa fa-address-book"},
        {name:"Charts and Maps",component:'charts',icon:"fa-solid fa-chart-simple"},
    ]

  return (
  <div className='font-Montserrat w-full'>
  <section className='flex flex-row'>
    <div className={`bg-[#080202] min-h-screen ${open ? 'w-full lg:w-60' : 'w-16'} duration-500`}>
      <div className='flex justify-between'>
        <div className={`${!open && 'hidden'} text-lg text-white italic cursor-pointer p-3 duration-500 font-semibold`}>
          <h1 className=''>Contact APP</h1>
        </div>
        <div onClick={() => setOpen(!open)} className='py-3 px-4 flex justify-end text-gray-100'>
          <i className="fa-2x fa-solid fa-bars cursor-pointer"></i>
        </div>
      </div>
      <div className='text-white m-4 flex flex-col gap-4 relative'>
        {menu?.map((menu, i) => (
          <Link key={i}
            to={`/${menu.component}`} className={`group flex items-center text-sm font-medium gap-3.5 p-2 hover:bg-gray-500 rounded-md`}>
            <div><i className={menu.icon}></i></div>
            <h2 style={{ transitionDelay: `${i + 3}00ms` }} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}</h2>
            <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 duration-300 group-hover:w-fit`}>{menu.name}</h2>
          </Link>
        ))}
        <button className={`group flex items-center text-sm font-medium gap-3.5 p-2 hover:bg-gray-500 rounded-md`}>
          <div><i className="fa-solid fa-power-off"></i></div>
          <h2 style={{ transitionDelay: `${9}00ms` }} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Logout</h2>
          <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 duration-300 group-hover:w-fit`}>Logout</h2>
        </button>
      </div>
    </div>
    <div className={`w-full ${open ? 'hidden lg:block' :''}`}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact/*' element={<Contact/>}></Route>
          <Route path='/charts' element={<ChartsANDmaps/>}></Route>
        </Routes>
    </div>
  </section>
</div>

  )
}

export default Sidebar
