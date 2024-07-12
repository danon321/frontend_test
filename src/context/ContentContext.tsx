import { createContext, ReactNode, useContext, useState } from "react";
import { defaultOption, options } from "../options";

type Option = {
  id: number;
  title: string;
  content: string;
};

interface ContentContextType {
  content: Option[];
  setCurrentOption: (option: Option) => void;
  addContent: () => void;
  replaceContent: () => void;
  randomOption: () => void;
  sortAlphabetical: (options: Option[]) => Option[];
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const ContentProvider = ({ children }: Props) => {
  const [currentOption, setCurrentOption] = useState<Option>(defaultOption);
  const [content, setContent] = useState<Option[]>([]);

  function addContent() {
    const isItemAlreadyExist = content.some(
      (option) => option.id === currentOption.id
    );

    if (!isItemAlreadyExist) {
      setContent([...content, currentOption]);
    } else alert("Podana opcja juz istnieje w tekscie");
  }
  function replaceContent() {
    setContent([currentOption]);
  }
  function randomOption() {
    const optionsLeft = options.filter(
      (option) =>
        !content.some((singleContent) => singleContent.id === option.id)
    );

    if (!optionsLeft.length) return;

    const randomIndex = Math.floor(Math.random() * optionsLeft.length);
    const randomOption = optionsLeft[randomIndex];
    setCurrentOption(randomOption);
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

  function resetContent() {
    setContent([]);
  }

  return (
    <ContentContext.Provider
      value={{
        content,
        setCurrentOption,
        addContent,
        replaceContent,
        randomOption,
        sortAlphabetical,
        resetContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};

export default ContentProvider;
