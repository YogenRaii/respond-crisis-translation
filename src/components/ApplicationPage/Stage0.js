import React from "react";

export default ({ advance }) => {
  return (
    <div>
      <h1 className="uk-text-lead">
        If you are a multilingual person, translator, or interpreter eager to
        use your language skills to be of service to migrants and refugees,
        please join our Team.
      </h1>
      <h1 className="uk-text-lead">
        We are so glad that you are willing to spend your valuable time with us
        help translating.
      </h1>
      <span className="uk-text-normal">
        Note: The majority of translation tasks are remote, so you can help in
        any country or timezone.
      </span>
      <button
        className="uk-button uk-button-primary uk-button-small"
        onClick={advance}
      >
        Next
      </button>
    </div>
  );
};
