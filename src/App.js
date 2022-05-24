import { useContext, useState } from "react";
import { languageContext } from "./LanguageContext";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }
  return (
    <languageContext.Provider value={language}>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
      <DisplayLanguage />
    </languageContext.Provider>
  );
}

function DisplayLanguage() {
  const language = useContext(languageContext);

  return (
    <div className="bg-red-500 border-2 border-blue-800">
      <h1>
        {language === "it" ? "Lingua selezionata: " : "Selected Language: "}
        {language}
      </h1>
    </div>
  );
}
