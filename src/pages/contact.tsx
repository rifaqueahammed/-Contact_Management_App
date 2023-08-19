import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import CreateContact from '../components/contacts/createContact'
import ContactsList from '../components/contacts/contactsList'
import EditContact from '../components/contacts/editContact'


function Contact() {
  const location = useLocation();
  const contact = location.state;

  return (
    <div className='w-full'>
    <div className='w-full h-14 bg-black text-white flex justify-center items-center font-semibold text-xl'>
       <h1>Contacts</h1>
    </div>
    <div className='p-10 m-2 h-min-screen flex flex-col justify-center items-center'>
        <Link  to={'/contact/createContact'} className='p-2 text-white bg-black rounded-md'>Create Contact</Link>
        <Routes>
            <Route path='/' element={<ContactsList/>}></Route>
            <Route path='/createContact' element={<CreateContact/>}></Route>
            <Route path={contact ? `/editContact/${contact.id}` : ''} element={<EditContact contact={contact}/>}></Route>
        </Routes>
    </div>
  </div>
  )
}

export default Contact
