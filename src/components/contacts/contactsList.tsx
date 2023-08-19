import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { deleteContact } from '../../features/contactsSlice';
import { useNavigate } from 'react-router-dom';

interface Contact {
    id:string;
    firstName: string;
    lastName: string;
    status: string
  }

  

function ContactsList() {
  const contactList = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch<AppDispatch>();
//   const [selectedContact,setSelectedcontact] = useState<Contact>();
const navigate = useNavigate()

  const handleEdit = (contact:Contact) => {
    navigate(`/contact/editContact/${contact.id}`,{ state: contact })
  };

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id)); 
    navigate('/contact');
  };


  return (
    <div className='w-full flex flex-wrap justify-center gap-4 mt-5'>
      {contactList.length > 0 ? (
        contactList.map((contact, index) => (
          <div key={index} className='p-4 shadow-md border w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <h3>ID : <span className='font-bold'>{contact.id}</span></h3>
            <h2>First Name: <span className='font-bold'>{contact.firstName}</span></h2>
            <h2>Last  Name: <span className='font-bold'>{contact.lastName}</span></h2>
            <h3>Status: <span className='font-bold'>{contact.status}</span></h3>
            <div className='flex justify-center items-center gap-5 mt-5'>
              <button onClick={()=>handleEdit(contact)} className='p-1 bg-gray-600 text-white px-4 sm:px-8 rounded-md'>Edit</button>
              <button onClick={()=>handleDelete(contact.id)} className='p-1 bg-red-600 text-white px-4 sm:px-8 rounded-md'>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <div className='flex justify-center items-center mt-40'>
          <h1 className='text-3xl text-center text-red-600'>
            No Contacts Found ,Please Add Contacts from the Create Contact Button.
          </h1>
        </div>
      )}
    </div>
  );
}

export default ContactsList;
