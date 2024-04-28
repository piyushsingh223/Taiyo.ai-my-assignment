import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ContactsType,
  contactType,
  deleteContact,
} from "../../features/contacts/contactsSlice";
import EditContact from "./EditContact";
const ContactsList = ({ data }: { data: ContactsType }) => {
  const dispatch = useDispatch();
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<contactType | null>(
    null
  );

  const handleEdit = (contact: contactType) => {
    setSelectedContact(contact);
    setToggleEditModal(true);
  };
  const handleDelete = (contactId: string | undefined) => {
    if (contactId !== undefined) {
      dispatch(deleteContact(contactId));
    }
  };
  return (
    <div>
      {data.length === 0 ? (
        <h2 className="font-bold text-2xl text-black-600">
          No contacts added. Please Add new contacts!
        </h2>
      ) : (
        <div className="w-full h-fit grid grid-cols-2  gap-4 place-content-around">
          {data.map((contact) => {
            return (
              <div
                key={contact.id}
                className="p-5 w-full h-full grid grid-cols-1 place-items-center
                gap-4"
              >
                <h3>Name : {`${contact.firstName} ${contact.lastName}`}</h3>

                <div className="space-y-2">
                  <h3>Status : {contact.status}</h3>
                </div>
                <button
                  className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => handleEdit(contact)}
                >
                  Edit
                </button>
                <button
                  className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
      {toggleEditModal ? (
        <EditContact
          handleClick={() => setToggleEditModal(false)}
          contact={selectedContact}
        />
      ) : null}
    </div>
  );
};

export default ContactsList;
