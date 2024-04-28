import { useState } from "react";
import {
  updateContact,
  contactType,
} from "../../features/contacts/contactsSlice";
import { useDispatch } from "react-redux";

type propType = {
  handleClick: () => void;
  contact: contactType | null;
};

const EditContact = ({ handleClick, contact }: propType) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState<string>(contact?.status as string);
  const [firstName, setFirstName] = useState(contact?.firstName as string);
  const [lastName, setLastName] = useState(contact?.lastName as string);
  const handleOptionSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleEdit = () => {
    const editedContact: contactType = {
      id: contact?.id as string,
      firstName: firstName,
      lastName: lastName,
      status: status as "active" | "inactive",
    };
    dispatch(updateContact(editedContact));
    handleClick();
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-10">
      <div className="bg-white rounded-lg shadow-lg p-6 w-fit">
        <h3 className="text-xl font-semibold mb-4">Enter Contact details</h3>
        <div className="text-base leading-relaxed text-gray-500 mb-6 w-full">
          <form className="w-full max-w-sm" id="edit-form">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="firstName"
                >
                  First Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6 pl-3">
              <div className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-11">
                Status
              </div>
              <div className="grid grid-col-1 gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600"
                    value="Active"
                    checked={status === "Active"}
                    onChange={handleOptionSelect}
                  />
                  <span className="ml-2">Active</span>
                </label>

                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600"
                    value="Inactive"
                    checked={status === "Inactive"}
                    onChange={handleOptionSelect}
                  />
                  <span className="ml-2">Inactive</span>
                </label>
              </div>
            </div>
            <div className="md:flex md:items-center w-full">
              <div className="w-full grid grid-col-1 gap-5">
                <button
                  className="shadow bg-blue-700 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleEdit}
                >
                  Save
                </button>
                <button
                  onClick={handleClick}
                  className="shadow bg-blue-700 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
