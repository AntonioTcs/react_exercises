import react from "react";
import "./main.css";
import { createContext } from "react";

const languageContext = createContext("en");
export class App extends react.Component {
  state = {
    language: "en",
  };

  languageChangeHandler = (event) => {
    console.log(event);
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <languageContext.Provider value={this.state.language}>
          <select
            value={this.state.language}
            onChange={this.languageChangeHandler}
          >
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
          <DisplayLanguage />
        </languageContext.Provider>
      </div>
    );
  }
}
class DisplayLanguage extends react.Component {
  render() {
    return (
      <div className="bg-red-500 border-2 border-blue-800">
        <languageContext.Consumer>
          {(language) => {
            return (
              <div>
                <h1>
                  {language === "it"
                    ? "Lingua selezionata: "
                    : "Language selected: "}
                  {language}
                </h1>
              </div>
            );
          }}
        </languageContext.Consumer>
      </div>
    );
  }
}
