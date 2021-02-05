import React from 'react';

export default ({onChange, previous, answers}) => {
    return (
        <>
        <div className="uk-width-1-1">
            <label className="uk-form-label">
              Do you have any confidant/therapist/support system in place for
              when facing difficult emotional situations?
            </label>
            <div className="uk-margin">
              <label>
                <input
                  className="uk-radio"
                  type="radio"
                  name="support"
                  value={true}
                  onChange={() => {
                    let editAnswer = answers;
                    editAnswer["support"] = true;
                    onChange({ answers: editAnswer });
                  }}
                />{" "}
                Yes
              </label>
            </div>
            <div className="uk-margin">
              <label>
                <input
                  className="uk-radio"
                  type="radio"
                  name="support"
                  value={false}
                  onChange={() => {
                    let editAnswer = answers;
                    editAnswer["support"] = false;
                    onChange({ answers: editAnswer });
                  }}
                />{" "}
                No
              </label>
            </div>
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
            disabled={answers["support"] !== undefined ? false : true}
          >
            Next
          </button>
          </>
    );
};