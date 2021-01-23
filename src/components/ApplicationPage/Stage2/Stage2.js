import React, { useState } from "react";
import Organizations from "../../../assets/lists/knownOrganizations";
import Navigation from "./Navigation";
import Support from "./Support";

export default ({ onChange, previous, advance, answers, languages }) => {
  const [lang, setLang] = useState([]);
  const [toLang, setToLang] = useState([]);
  const [fromLang, setFromLang] = useState([]);
  const [otherField, setOtherField] = useState(false);
  return (
    <div>
      {/* eslint-disable */}
      <Navigation lang={lang} />
      <ul className="uk-switcher uk-margin">
        <li>
          <Support onChange={onChange} previous={previous} answers={answers} />
        </li>
        <li>
          <div className="uk-width-1-1">
            <label className="uk-form-label">How did you hear about us?</label>
            {Organizations.map((org, index) => (
              <div key={"org " + index} className="uk-margin">
                <label>
                  <input
                    className="uk-radio"
                    type="radio"
                    name="find_us"
                    onChange={() => {
                      let editAnswer = answers;
                      editAnswer["find_us"] = org;
                      onChange({ answers: editAnswer });
                      setOtherField(false);
                    }}
                  />{" "}
                  {org}
                </label>
              </div>
            ))}
            <div className="uk-margin">
              <label className="uk-form-label">
                <input
                  className="uk-radio"
                  type="radio"
                  name="find_us"
                  onChange={() => {
                    setOtherField(!otherField);
                    let editAnswer = answers;
                    editAnswer["find_us"] = undefined;
                    onChange({ answers: editAnswer });
                  }}
                />{" "}
                {otherField ? (
                  <input
                    className="uk-input uk-form-width-medium"
                    placeholder="Other"
                    name="find_us"
                    onChange={(value) => {
                      let editAnswer = answers;

                      editAnswer["find_us"] = value.target.value
                        ? value.target.value
                        : undefined;
                      onChange({ answers: editAnswer });
                    }}
                  />
                ) : (
                  "Other"
                )}
              </label>
            </div>
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
            disabled={answers["find_us"] !== undefined ? false : true}
          >
            Next
          </button>
        </li>
        <li>
          <label className="uk-form-label">
            Which language(s) are you able to translate?
          </label>
          <div className="uk-margin" uk-grid="">
            {Object.keys(languages).map((language, index) => (
              <div
                key={"language " + index}
                className="uk-width-1-3@m uk-width-1-2@s"
              >
                <div
                  className={`uk-card uk-card-body ${
                    languages[language]["checked"]
                      ? "uk-card-primary"
                      : "uk-card-default"
                  }`}
                  onClick={() => {
                    let temp = languages;
                    temp[language]["checked"] = !temp[language]["checked"];
                    if (temp[language]["checked"]) {
                      let leng = lang;
                      leng.push(language);
                      setLang(leng);
                    } else {
                      let langIndex = lang.indexOf(language);
                      let leng = lang.splice(langIndex, 1);
                      setLang(leng);
                    }
                    onChange({ languages: temp });
                  }}
                >
                  {language}
                </div>
              </div>
            ))}
          </div>
          <div className="uk-width-1-1">
            <label className="uk-form-label" htmlFor="addtional_languages">
              If you can provide support for languages not listed above, please
              list it below:
            </label>
            <textarea
              alt="addtional_languages"
              className="uk-textarea"
              id="addtional_languages"
              required=""
              label=""
              name="addtional_languages"
              placeholder="type your answer here"
              rows="5"
              title="addtional_languages"
            />
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
            disabled={lang.length > 0 ? false : true}
          >
            Next
          </button>
        </li>
        <li>
          <label className="uk-form-label">
            For the langauges you have selected, which tasks here are you
            confident translating?
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
                    temp[language]["fromEnglish"] = !temp[language][
                      "fromEnglish"
                    ];
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
        </li>
        {lang.map((l, index) => (
          <li key={l + " experience"}>
            <label className="uk-form-label">
              For {l}, have you had experience in any of the following? (click
              all that apply)
            </label>
            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
              {Object.keys(languages[l]["experience"]).map((ex, index) => (
                <label key={l + " experience " + "option " + index}>
                  <input
                    className="uk-checkbox"
                    type="checkbox"
                    checked={languages[l]["experience"][ex]["checked"]}
                    onClick={() => {
                      let temp = languages;
                      temp[l]["experience"][ex]["checked"] = !temp[l][
                        "experience"
                      ][ex]["checked"];
                      onChange({ languages: temp });
                    }}
                    readOnly
                  />{" "}
                  {ex}
                </label>
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
            >
              Next
            </button>
          </li>
        ))}
        {lang.map((l, index) => (
          <li key={l + " oral"}>
            <div className="uk-width-1-1">
              <label className="uk-form-label">
                For {l}, besides translating documents, would you be willing to
                provide oral translation?
              </label>
              <label className="uk-width-1-1">
                <input
                  className="uk-radio"
                  type="radio"
                  name="support"
                  value={true}
                  onChange={() => {
                    let temp = languages;
                    temp[l]["oral"] = true;
                    onChange({ languages: temp });
                  }}
                />{" "}
                Yes
              </label>
              <label className="uk-width-1-1">
                <input
                  className="uk-radio"
                  type="radio"
                  name="support"
                  value={false}
                  onChange={() => {
                    let temp = languages;
                    temp[l]["oral"] = false;
                    onChange({ languages: temp });
                  }}
                />{" "}
                No
              </label>
            </div>
            <button
              className="uk-button uk-button-primary uk-button-small"
              onClick={previous}
            >
              Back
            </button>
            <button
              className="uk-button uk-button-primary uk-button-small"
              uk-switcher-item="next"
              disabled={languages[l]["oral"] !== undefined ? false : true}
            >
              Next
            </button>
          </li>
        ))}
        <li>
          <h1 className="uk-text-lead">
            Next, we would like to assess your translation skills. We will ask
            you to translate a few simple messages.
          </h1>

          <button
            className="uk-button uk-button-primary uk-button-small"
            onClick={previous}
          >
            Back
          </button>
          <button
            className="uk-button uk-button-primary uk-button-small"
            onClick={advance}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};
