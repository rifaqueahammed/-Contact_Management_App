import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../features/contactsSlice";
import { AppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";

interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    status: string;
  }
  
  interface EditContactProps {
    contact: Contact; 
  }

const  EditContact : React.FC<EditContactProps> = ({ contact }) =>{
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [editedContact,setEditedContact] = useState(contact);
  const [error,setError] = useState('');


  const changeDetails = (e: { target: { id: string; value: string } }) => {
    const { id, value } = e.target;
    setEditedContact((prevContact) => ({
      ...prevContact,
      [id]: value,
    }));
  };

  const submitForm = (e: { preventDefault: () => void }) => {
    if(editedContact.firstName === ''){
        setError('First Name is Required');
      }
      else if(editedContact.lastName === ''){
        setError('Last Name is Required');
      }
      else if(editedContact.status === ''){
        setError('Please Select Status');
      }
      else{
        e.preventDefault();
        dispatch(editContact(editedContact));
        navigate('/contact');
      }
    };
  return (
    <div className="fixed inset-0 w-screen h-full backdrop-blur-sm bg-black bg-opacity-40 flex justify-center items-center">
      <div className="shadow-md p-8 bg-white sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center gap-3 rounded-sm">
        <h1 className="text-center font-semibold text-xl font-serif">Edit Contact</h1>
        <div className="w-full">
          <label htmlFor="first-name">First Name :</label>
          <input
            type="text"
            className="p-2 bg-gray-100 rounded-md ml-1 w-full mt-1"
            id="firstName"
            placeholder="Jhone"
            value={editedContact.firstName}
            onChange={changeDetails}
          />
        </div>
        <div className="w-full">
          <label htmlFor="last-name">Last Name :</label>
          <input
            type="text"
            className="p-2 bg-gray-100 rounded-md ml-1 w-full mt-1"
            id="lastName"
            placeholder="Deo"
            value={editedContact.lastName}
            onChange={changeDetails}
          />
        </div>
        <div className="flex w-full">
          <label className="">Status :</label>
          <div className="flex flex-col ml-2 sm:ml-10">
            <div>
              <input
                type="radio"
                className="p-4 bg-gray-100 rounded-md ml-1 w-4 h-4"
                id="status"
                value="Active"
                checked={editedContact.status === "Active"}
                onChange={changeDetails}
              />
              <label htmlFor="status-active" className="ml-1">
                Active
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="p-4 bg-gray-100 rounded-md ml-1 w-4 h-4"
                id="status"
                value="Inactive"
                checked={editedContact.status === "Inactive"}
                onChange={changeDetails}
              />
              <label htmlFor="status-inactive" className="ml-1">
                Inactive
              </label>
            </div>
          </div>
        </div>
        <p className="text-red-600 font-medium">{error}</p>
        <button
          type="submit"
          onClick={submitForm}
          className="p-2 bg-green-600 text-white rounded-md font-semibold mt-3 px-10"
        >
          Save Contact
        </button>
      </div>
    </div>
  );
}

export default EditContact;
