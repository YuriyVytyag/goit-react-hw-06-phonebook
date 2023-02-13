import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    setContact: (state, action) => {
      state.contacts.push(action.payload);
      state.filter = '';
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setContact, removeContact, filterContact } =
  contactSlice.actions;
export default contactSlice.reducer;
