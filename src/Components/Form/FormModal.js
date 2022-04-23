import { useReducer } from "react";
import icon from "../../assets/location-icon.png";

// reducer func for adding child and adult guests
const initialState = { adultFigure: 0, childrenFigure: 0 };
const reducer = (state, action) => {
  switch (action) {
    case "adultSubtract":
      return {
        adultFigure:
          state.adultFigure === 0 ? state.adultFigure : state.adultFigure--,
        ...state,
      };
    case "adultAddition":
      return { adultFigure: ++state.adultFigure, ...state };
    case "childSubtract":
      return {
        childrenFigure:
          state.childrenFigure === 0
            ? state.childrenFigure
            : state.childrenFigure--,
        ...state,
      };
    case "childAddition":
      return { childrenFigure: ++state.childrenFigure, ...state };
    default:
      break;
  }
};

const FormModal = props => {
  const [curState, dispatch] = useReducer(reducer, initialState);

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    props.modal.show && (
      <>
        {/* backdrop */}
        <div
          className="absolute z-10 bg-[#4f4f4f66] w-full h-full"
          onClick={props.closeModal}
        ></div>

        {/*form for searching and adding guests */}
        <div
          className="absolute z-20 left-0 bg-white py-[18px]
     px-[22px] w-full font-mulish"
        >
          <div className="flex items-center justify-between font-bold font-mulish">
            <span className="text-xs">Edit your search</span>
            <button className="text-lg" onClick={props.closeModal}>
              X
            </button>
          </div>

          {/* main form */}
          <form
            className="mt-[18px] mb-[32px] rounded-2xl
         shadow-[0px_1px_6px_rgba(0,0,0,0.1)] py-3 px-6"
            onSubmit={submitHandler}
          >
            <div className="mb-3 border-b">
              <label
                className="block font-extrabold text-[9px] mb-1"
                htmlFor="location"
              >
                LOCATION
              </label>
              <input
                type="text"
                id="location"
                autoFocus={props.modal.focus}
                className={
                  "text-sm text-big-headings focus-visible:outline-guests"
                }
              />
            </div>

            <div>
              <span className="block font-extrabold text-[9px] mb-1">
                GUESTS
              </span>
              <button className="text-sm text-guests focus-visible:outline-guests">
                Add guests
              </button>
            </div>
          </form>

          {/* search results */}
          {props.modal.searchResults && (
            <div className="mt-8 ml-5 text-sm mb-44 font-mulish text-small-headings">
              <ul>
                <li className="flex items-center gap-[10px] mb-8">
                  <img
                    src={icon}
                    alt="location icon"
                    className="w-[14px] h-5"
                  />
                  <span>Helsinki, Finland</span>
                </li>
                <li className="flex items-center gap-[10px] mb-8">
                  <img
                    src={icon}
                    alt="location icon"
                    className="w-[14px] h-5"
                  />
                  <span>Turku, Finland</span>
                </li>
                <li className="flex items-center gap-[10px] mb-8">
                  <img
                    src={icon}
                    alt="location icon"
                    className="w-[14px] h-5"
                  />
                  <span>Oulu, Finland</span>
                </li>
                <li className="flex items-center gap-[10px] mb-8">
                  <img
                    src={icon}
                    alt="location icon"
                    className="w-[14px] h-5"
                  />
                  <span>Vaasa, Finland</span>
                </li>
              </ul>
            </div>
          )}

          {/* number of guests */}
          {props.modal.guests && (
            <div className="p-6 text-sm font-mulish">
              {/* adults */}
              <div>
                <h4 className="font-bold">Adults</h4>
                <p className="text-guests">Ages 13 or above</p>
                <div className="mt-3">
                  <button
                    className="w-6 h-6 font-semibold border border-product-desc"
                    onClick={() => dispatch("adultSubtract")}
                  >
                    -
                  </button>{" "}
                  <span className="mx-4 font-semibold">
                    {curState.adultFigure}
                  </span>{" "}
                  <button
                    className="w-6 h-6 font-semibold border border-product-desc"
                    onClick={() => dispatch("adultAddition")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* children */}
              <div className="mt-12">
                <h4 className="font-bold">Children</h4>
                <p className="text-guests">Ages 2-12</p>
                <div className="mt-3">
                  <button
                    className="w-6 h-6 font-semibold border border-product-desc"
                    onClick={() => dispatch("childSubtract")}
                  >
                    -
                  </button>{" "}
                  <span className="mx-4 font-semibold">
                    {curState.childrenFigure}
                  </span>{" "}
                  <button
                    className="w-6 h-6 font-semibold border border-product-desc"
                    onClick={() => dispatch("childAddition")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* search button */}
          <div>
            <button
              className="py-4 px-6 mx-auto text-white bg-primary w-[126px]
       h-[48px] flex items-center rounded-2xl justify-around"
            >
              <svg
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="17px"
                height="17px"
              >
                <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default FormModal;
