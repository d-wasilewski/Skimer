import theme from "./theme.js";

export default {
   sidebar: {
      width: 60,
      border: "black solid 1px",
      height: "100vh",
      position: "fixed",
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "60px auto",
      padding: {
         top: 20,
         left: 0,
         right: 0,
         bottom: 20,
      },

      "& .logo": {
         color: theme.pallette.main,
         fontSize: 32,
         textAlign: "center",
      },

      "& ul": {
         listStyleType: "none",
         textAlign: "center",
         color: theme.pallette.gray,
         fontSize: 28,
         padding: 0,
         margin: {
            top: 80,
         },

         "& li": {
            margin: {
               top: 20,
            },
         },
      },
   },
};
