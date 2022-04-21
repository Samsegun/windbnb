import logo from "./assets/logo.svg";
import FormUI from "./Components/Form/FormUI";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="px-3">
        {/* header */}
        <header className="h-[135px] flex flex-col justify-between">
          <h1 className="mt-5 ">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </h1>

          <FormUI />
        </header>

        {/* main body */}
        <Main />
      </div>
    </div>
  );
}

export default App;
