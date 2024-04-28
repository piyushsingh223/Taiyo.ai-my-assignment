import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface contactType {
  id: string;
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
}

export interface ContactsType extends Array<contactType> {}

const initialState: ContactsType = [];

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<contactType>) => {
      state.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      const contactIndex = state.findIndex(
        (contact) => contact.id === action.payload
      );
      if (contactIndex !== -1) {
        state.splice(contactIndex, 1);
      }
    },
    updateContact: (state, action: PayloadAction<contactType>) => {
      const contactIndex = state.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (contactIndex !== -1) {
        state[contactIndex] = action.payload;
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
