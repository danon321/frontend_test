import "./App.scss";
import Button from "./components/Button";
import InputRadio from "./components/InputRadio";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <main className="home">
        <h1 className="home__title title title--underline">Nagłówek H1</h1>
        <div className="home__blocks">
          <section>
            <h2>Blok 1</h2>
            <InputRadio>Opcja pierwsza</InputRadio>
            <InputRadio>Opcja druga</InputRadio>
            <InputRadio>Opcja losowa</InputRadio>
          </section>
          <section>
            <h2>Blok 2</h2>
            <Button>Zastąp</Button>
            <Button>Doklej</Button>
          </section>
          <section>
            <h2>Blok 3</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
