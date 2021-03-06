import React from "react";

export default ({ l }) => {
  return (
    <React.Fragment>
      <li key={l + "translationpartto"}>
        <label className="uk-form-label">
          Please translate the following {l} message into English
        </label>
        ...
        <div className="uk-width-1-1">
          <label className="uk-form-label" htmlFor="translation">
            Your answer:
          </label>
          <textarea
            alt="translation"
            className="uk-textarea"
            id="translation"
            required=""
            label=""
            name="translation"
            placeholder="type your answer here"
            rows="5"
            title="translation"
          />
        </div>
        <button
          className="uk-button uk-button-primary uk-button-small"
          uk-switcher-item="next"
        >
          Next
        </button>
      </li>
      <li key={l + "translationpartfrom"}>
        <label className="uk-form-label">
          Please translate the following English message into {l}
        </label>
        ...
        <div className="uk-width-1-1">
          <label className="uk-form-label" htmlFor="translation">
            Your answer:
          </label>
          <textarea
            alt="translation"
            className="uk-textarea"
            id="translation"
            required=""
            label=""
            name="translation"
            placeholder="type your answer here"
            rows="5"
            title="translation"
          />
        </div>
        <button
          className="uk-button uk-button-primary uk-button-small"
          uk-switcher-item="next"
        >
          Next
        </button>
      </li>
    </React.Fragment>
  );
};
