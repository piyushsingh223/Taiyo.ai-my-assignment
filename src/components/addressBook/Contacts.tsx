import { useState } from "react";
import { useSelector } from "react-redux";

import ContactsList from "./ContactsList";
import AddContact from "./AddContact";
import { RootState } from "../../app/store";

const Contacts = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const [toggleAddModal, setToggleAddModal] = useState(false);
  const handleClick = () => {
    setToggleAddModal(!toggleAddModal);
  };
  return (
    <div className="w-full h-fit flex flex-col items-center space-y-5">
      <div className=" w-1/4 md:w-1/5 h-10 mt-5">
        <button
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={handleClick}
        >
          Add Contacts
        </button>
      </div>
      {toggleAddModal ? <AddContact handleClick={handleClick} /> : null}

      <ContactsList data={contacts} />
    </div>
  );
};

export default Contacts;
