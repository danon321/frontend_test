import "./App.scss";
import "./styles/layout/_section.scss";
import "./styles/components/_text.scss";

import Button from "./components/Button";
import InputRadio from "./components/InputRadio";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Option } from "./types/option";
import { useContent } from "./context/ContentContext";
import { defaultOption, options } from "./options";

function App() {
  const {
    content,
    setCurrentOption,
    addContent,
    randomOption,
    replaceContent,
    sortAlphabetical,
  } = useContent();
  return (
    <>
      <Header />
      <main className="home">
        <h1 className="home__title title title--underline">Nagłówek H1</h1>
        <div className="home__blocks">
          <section className="section home__options">
            <h2 className="section__title">Blok pierwszy</h2>
            {options.map((option: Option) => (
              <InputRadio
                key={option.id}
                onClick={() => setCurrentOption(option)}
                checked={option.id === defaultOption.id}
                labelText={option.title}
              >
                {option.title}
              </InputRadio>
            ))}
            <InputRadio labelText="Opcja losowa" onClick={randomOption}>
              Opcja losowa
            </InputRadio>
          </section>
          <section className="section home__actions">
            <h2 className="section__title">Blok drugi</h2>
            <div className="home__buttons">
              <Button onClick={replaceContent}>Zastąp</Button>
              <Button onClick={addContent}>Doklej</Button>
            </div>
          </section>
          <section className="section home__content">
            <h2 className="section__title title title--cutoff">
              Blok z długą nazwą która sama sie przytnie asd
            </h2>
            <div className="desc">
              {sortAlphabetical(content).map((option: Option) => (
                <p key={option.id}>{option.content}</p>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
