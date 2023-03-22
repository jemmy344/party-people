import React from "react";
import "./index.css";

export const Links = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </>
  );
};
