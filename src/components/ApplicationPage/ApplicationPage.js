import React from "react";
import "./ApplicationPage.css";
import ContactForm from "../ContactForm/ContactForm";
import Stage0 from "./Stage0";
import Stage2 from "./Stage2/Stage2";
import Stage4 from "./Stage4";
import Stage3 from "./Stage3";

export default ({
  currentProgress,
  translationDone,
  languagesDone,
  onChange,
  advance,
  previous,
  answers,
  languages,
}) => {
  switch (currentProgress) {
    case 0:
      return <Stage0 advance={advance} />;
    case 1:
      return (
        <div className="uk-margin-medium-right">
          <ContactForm
            previous={previous}
            advance={advance}
            answers={answers}
            onChange={onChange}
          />
        </div>
      );
    case 2:
      return (
        <Stage2
          onChange={onChange}
          previous={previous}
          advance={advance}
          answers={answers}
          languages={languages}
        />
      );
    case 3:
      return <Stage3 advance={advance} languages={languages} />;
    case 4:
      return <Stage4 />;
    default:
      return <div>error</div>;
  }
};
