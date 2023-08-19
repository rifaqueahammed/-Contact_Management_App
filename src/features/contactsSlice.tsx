
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id:string;
  firstName: string;
  lastName: string;
  status: string
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id,firstName, lastName, status } = action.payload;
      const contactIndex = state.contacts.findIndex(contact => contact.id === id);
      if (contactIndex !== -1) {
        state.contacts[contactIndex] = { id,firstName,lastName,status };
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
