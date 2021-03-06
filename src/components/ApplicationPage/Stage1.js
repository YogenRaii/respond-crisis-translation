import React from "react";
import ContactForm from "../ContactForm/ContactForm";

export default ({ previous, advance, answers, onChange }) => {
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
};
