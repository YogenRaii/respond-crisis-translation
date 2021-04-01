import React from "react";

export default ({ languages }) => {
  return (
    <ul
      style={{ display: "none" }}
      className="uk-subnav uk-subnav-pill"
      uk-switcher="animation: uk-animation-fade"
    >
      {Object.keys(languages).map((l, index) =>
        languages[l]["checked"] && languages[l]["toEnglish"] ? (
          <li key={l + index + "totranslating"}>
            <a href="/#">{l} translate</a>
          </li>
        ) : (
          ""
        )
      )}
      {Object.keys(languages).map((l, index) =>
        languages[l]["checked"] && languages[l]["fromEnglish"] ? (
          <li key={l + index + "fromtranslating"}>
            <a href="/#">{l} translate</a>
          </li>
        ) : (
          ""
        )
      )}
      <li>
        <a href="/#">done</a>
      </li>
    </ul>
  );
};
