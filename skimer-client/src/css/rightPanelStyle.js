//import theme from "./theme.js";

import theme from "./theme";

export default {
   rightPanel: {
      width: 300,
      height: "100vh",
      border: "black solid 1px",
      position: "fixed",
      right: 0,
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr 1fr",

      "& .userBox": {
         width: "100%",
         height: 260 - 100,
         display: "grid",
         gridTemplateColumns: "1fr 90px",
         gridTemplateRows: "1fr 30px 1fr",
         paddingTop: 100,

         "& h4": {
            textAlign: "right",
            marginRight: 20,
            marginTop: 40,
         },

         "& .avatar img": {
            width: 70,
            height: 70,
            borderRadius: "50%",
            display: "block",
         },

         "& .avatar": {
            position: "relative",
            "&:before": {
               content: "' '",
               width: 82,
               height: 82,
               borderRadius: "50%",
               border: theme.pallette.mainLighter + " solid 3px",
               display: "block",
               position: "absolute",
               boxSizing: "border-box",
               left: -6,
               top: -6,
            },
         },

         "& h5, & span": {
            padding: 0,
            color: theme.pallette.main,
            fontSize: 14,
         },
         "& h5": {
            margin: "0 30px",
         },

         "& span": {
            margin: 0,
            marginRight: 35,
            textAlign: "right",
            fontWeight: "bold",
         },

         "& .progressBar": {
            width: 250,
            height: 10,
            borderRadius: 5,
            position: "relative",
            background: "#ccc",
            padding: 0,
            gridColumn: "1 / 3",
            margin: "0 auto",

            "& .progress": {
               width: "70%",
               height: "100%",
               background: theme.pallette.main,
               borderRadius: 5,
               margin: 0,
            },
         },

         "& h5, & span, & .progressBar": {
            marginTop: 20,
         },
      },
   },
};
