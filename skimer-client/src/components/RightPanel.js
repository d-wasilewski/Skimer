import React from "react";
import { createUseStyles } from "react-jss";

import Avatar from "../images/unknown.png";

import style from "../css/rightPanelStyle.js";

const useStyles = createUseStyles(style);

export default function RightPanel() {
   const classes = useStyles();

   return (
      <div className={classes.rightPanel}>
         <div className="userBox">
            <h4>Michał Dzieciuchowicz</h4>
            <div className="avatar">
               <img src={Avatar} />
            </div>

            <h5>Postęp</h5>
            <span>70%</span>
            <div className="progressBar">
               <div className="progress"></div>
            </div>
         </div>
      </div>
   );
}
