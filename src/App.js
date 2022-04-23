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

      {/* footer */}
      <footer className="py-6 text-sm text-center font-montserrat text-product-desc">
        <p>
          Created by{" "}
          <a href="/" className="font-bold underline">
            Samsegun
          </a>{" "}
          - <a href="/">devChallenges.io</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
