import React from "react";

export default ({onChange, languages, lang, fromLang, setFromLang, toLang, setToLang}) => {
  return (
    <>
      <label className="uk-form-label">
        For the langauges you have selected, which tasks here are you confident
        translating?
      </label>
      <div className="uk-margin" uk-grid="">
        {lang.map((language, index) => (
          <div
            key={"languageto " + index}
            className="uk-width-1-3@m uk-width-1-2@s"
          >
            <div
              className={`uk-card uk-card-body ${
                languages[language]["toEnglish"]
                  ? "uk-card-primary"
                  : "uk-card-default"
              }`}
              onClick={() => {
                let temp = languages;
                temp[language]["toEnglish"] = !temp[language]["toEnglish"];
                if (temp[language]["toEnglish"]) {
                  let leng = toLang;
                  leng.push(language);
                  setToLang(leng);
                } else {
                  let langIndex = toLang.indexOf(language);
                  let leng = toLang.splice(langIndex, 1);
                  setToLang(leng);
                }
                onChange({ languages: temp });
              }}
            >
              {language} to English
            </div>
          </div>
        ))}
        {lang.map((language, index) => (
          <div
            key={"languagefrom " + index}
            className="uk-width-1-3@m uk-width-1-2@s"
          >
            <div
              className={`uk-card uk-card-body ${
                languages[language]["fromEnglish"]
                  ? "uk-card-primary"
                  : "uk-card-default"
              }`}
              onClick={() => {
                let temp = languages;
                temp[language]["fromEnglish"] = !temp[language]["fromEnglish"];
                if (temp[language]["fromEnglish"]) {
                  let leng = fromLang;
                  leng.push(language);
                  setFromLang(leng);
                } else {
                  let langIndex = fromLang.indexOf(language);
                  let leng = fromLang.splice(langIndex, 1);
                  setFromLang(leng);
                }
                onChange({ languages: temp });
              }}
            >
              English to {language}
            </div>
          </div>
        ))}
      </div>
      <button
        className="uk-button uk-button-primary uk-button-small"
        uk-switcher-item="previous"
      >
        Back
      </button>
      <button
        className="uk-button uk-button-primary uk-button-small"
        uk-switcher-item="next"
        disabled={toLang.length > 0 || fromLang.length > 0 ? false : true}
      >
        Next
      </button>
    </>
  );
};
