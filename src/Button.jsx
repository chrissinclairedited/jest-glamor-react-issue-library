import React from "react";
import { css } from "glamor";

export default ({onClick, children}) => (
    <div {...css({fontSize: 10})}><button onClick={onClick}>{children}</button></div>
);
