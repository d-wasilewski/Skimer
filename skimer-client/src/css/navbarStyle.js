//import theme from "./theme.js";

export default {
   navbar: {
      width: "calc(100% - 90px - 410px)",
      height: 80,
      border: "black solid 1px",
      paddingLeft: 90,
      paddingRight: 410,
      display: "grid",
      gridTemplateColumns: "60px 1fr",
      alignItems: "center",

      "& ul": {
         listStyleType: "none",
         justifySelf: "end",
      },
   },
};
