const Form = () => {
  const formSubmitHandler = e => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-400">
      <form onClick={formSubmitHandler}>
        <input type="search" className="bg-transparent" />
      </form>
    </div>
  );
};

export default Form;
