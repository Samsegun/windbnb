import React, { useState } from "react";
import { createPortal } from "react-dom";
import FormModal from "./FormModal";

const FormUI = () => {
  const [modal, setModal] = useState({
    show: false,
    focus: false,
    searchResults: false,
    guests: false,
  });

  const closeModalHandler = () => {
    setModal({
      show: false,
      focus: false,
      searchResults: false,
      guests: false,
    });
  };

  const openModalHandler = e => {
    if (e.target.localName === "input") {
      setModal({ show: true, focus: true, searchResults: true, guests: false });
    } else if (e.target.localName === "button") {
      setModal({
        show: true,
        focus: false,
        searchResults: false,
        guests: true,
      });
    }
  };

  return (
    <>
      {/* form modal */}
      {createPortal(
        <FormModal modal={modal} closeModal={closeModalHandler} />,
        document.getElementById("modal")
      )}

      <div
        className="w-[297px] h-14 flex
     items-center justify-between shadow-[0px_1px_6px_rgba(0,0,0,0.1)]
     rounded-2xl self-center"
      >
        <input
          type="text"
          placeholder="Search City"
          className="h-full border-r-2 w-[138px] px-4 text-sm
           bg-transparent outline-none font-mulish"
          onClick={e => openModalHandler(e)}
        />
        <button
          className="text-sm font-mulish text-guests w-[106px] border-r-2 h-full"
          onClick={e => openModalHandler(e)}
        >
          Add guests
        </button>
        <button className="w-[53px] h-full flex items-center justify-center">
          <svg
            fill="#EB5757"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="17px"
            height="17px"
          >
            <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default FormUI;
