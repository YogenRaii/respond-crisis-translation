import React from "react";

export default ({previous, advance}) => {
  return (
    <>
      <h1 className="uk-text-lead">
        Next, we would like to assess your translation skills. We will ask you
        to translate a few simple messages.
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
    </>
  );
};
