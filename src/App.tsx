import "./App.scss";
import "./styles/layout/_section.scss";
import "./styles/components/_text.scss";

import Button from "./components/Button";
import InputRadio from "./components/InputRadio";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Option } from "./types/option";
import { useState } from "react";

const options: Option[] = [
  {
    id: 1,
    title: "Opcja pierwsza",
    content: "Tekst pierwszej opcji",
  },
  {
    id: 2,
    title: "Opcja druga",
    content: "Tekst drugiej opcji",
  },
  {
    id: 3,
    title: "Opcja trzecia",
    content: "Tekst trzeciej opcji",
  },
  {
    id: 4,
    title: "Opcja czwarta",
    content: "Tekst czwartej opcji",
  },
  {
    id: 5,
    title: "Opcja piąta",
    content: "Tekst asdasdasdasd opcji",
  },
  {
    id: 6,
    title: "Opcja szósta",
    content: "Tekst abcasdasdasd opcji",
  },
];

const defaultOption = options[0];

function App() {
  const [currentOption, setCurrentOption] = useState<Option>(defaultOption);
  const [content, setContent] = useState<Option[]>([]);

  function replaceContent() {
    const isItemAlreadyExist = content.some(
      (option) => option.id === currentOption.id
    );

    if (!isItemAlreadyExist) {
      setContent([...content, currentOption]);
    } else alert("Podana opcja juz istnieje w tekscie");
  }
  function addContent() {
    setContent([currentOption]);
  }

  function sortAlphabetical(options: Option[]) {
    return options.sort(function (a, b) {
      if (a.content < b.content) {
        return -1;
      }
      if (a.content > b.content) {
        return 1;
      }
      return 0;
    });
  }
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
              >
                {option.title}
              </InputRadio>
            ))}
            <InputRadio onClick={() => setCurrentOption(options[0])}>
              Opcja losowa
            </InputRadio>
          </section>
          <section className="section home__actions">
            <h2 className="section__title">Blok drugi</h2>
            <div className="home__buttons">
              <Button onClick={addContent}>Zastąp</Button>
              <Button onClick={replaceContent}>Doklej</Button>
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
