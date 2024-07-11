import "./App.scss";
import Button from "./components/Button";
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
          </section>
          <section>
            <h2>Blok 2</h2>
            <Button>Zastąp</Button>
            <Button>Doklej</Button>
          </section>
          <section>
            <h2>Blok 3</h2>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
