const FormModal = () => {
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    // form for searching and adding guests
    <div>
      <div>
        <span>Edit your search</span>
        <button>X</button>
      </div>

      <form onSubmit={submitHandler}>
        <label htmlFor="location">LOCATION</label>
        <input type="text" name="location" id="loaction" />

        <label htmlFor="guests">GUESTS</label>
        <input type="text" name="guests" id="guests" />
      </form>
    </div>
  );
};

export default FormModal;
