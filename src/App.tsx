import "./App.scss";
import "./styles/layout/_section.scss";
import "./styles/components/_text.scss";

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
          <section className="section home__options">
            <h2 className="section__title">Blok pierwszy</h2>
            <InputRadio>Opcja pierwsza</InputRadio>
            <InputRadio>Opcja druga</InputRadio>
            <InputRadio>Opcja losowa</InputRadio>
          </section>
          <section className="section home__actions">
            <h2 className="section__title">Blok drugi</h2>
            <div className="home__buttons">
              <Button>Zastąp</Button>
              <Button>Doklej</Button>
            </div>
          </section>
          <section className="section home__content">
            <h2 className="section__title title title--cutoff">
              Blok z długą nazwą która sama sie przytnie asd
            </h2>
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
