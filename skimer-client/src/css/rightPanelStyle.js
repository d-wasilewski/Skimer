//import theme from "./theme.js";

import theme from "./theme"

export default {
   rightPanel: {
      width: 380,
      background: "white",
      height: "100vh",
      padding: "0 15px",
      position: "fixed",
      right: 0,
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr 1fr",

      "@media (max-width: 960px)": {
         display: "none",
         "&:target": {
            display: "grid",
         },
         "&:target #navbar": {
            display: "block",
         },
      },

      "& .userBox": {
         width: "100%",
         height: 260 - 100,
         display: "grid",
         gridTemplateColumns: "1fr 90px",
         gridTemplateRows: "100px 1fr 30px 1fr",

         "& #closeMenu": {
            gridColumn: "1 / 3",
            justifySelf: "end",
            padding: 10,
            margin: 15,
            fontSize: 22,
            borderRadius: "50%",
            width: 30,
            height: 30,
            textAlign: "center",
            cursor: "pointer",
            color: "black",
            visibility: "hidden",

            "@media (max-width: 960px)": {
               visibility: "visible",
            },

            "&:hover": {
               background: theme.pallette.gray,
            },
         },

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
            margin: "0 65px",
         },

         "& span": {
            margin: 0,
            marginRight: 65,
            textAlign: "right",
            fontWeight: "bold",
         },

         "& .progressBar": {
            width: 250,
            height: 10,
            borderRadius: 5,
            position: "relative",
            background: "#eee",
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
      }, // .userbox
   },
}
