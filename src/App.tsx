import "./App.scss";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <main className="home">
        <h1 className="home__title title title--underline">Nagłówek H1</h1>
        <div className="home__blocks">
          <section>Blok 1</section>
          <section>Blok 2</section>
          <section>Blok 3</section>
        </div>
      </main>
    </>
  );
}

export default App;
