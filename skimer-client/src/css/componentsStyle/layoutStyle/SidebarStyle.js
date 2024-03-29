import theme from "../../theme.js"

export default {
   sidebar: {
      width: 70,
      background: "white",
      height: "100vh",
      position: "fixed",
      top: 95,
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "60px auto",
      padding: "26px 0px",

      "& ul": {
         listStyleType: "none",
         textAlign: "center",
         fontSize: 28,
         padding: 0,
         marginTop: 80,

         "& li": {
            padding: "10px 0",
            height: 40,
            position: "relative",
            color: theme.pallette.grayDark,

            "&:hover": {
               background: theme.pallette.gray,
               cursor: "pointer",
               color: theme.pallette.main,
               "&:before": {
                  display: "block",
               },
            },
            "&:before": {
               content: "''",
               position: "absolute",
               left: 0,
               top: 0,
               display: "none",
               height: 60,
               width: 6,
               background: theme.pallette.main,
            },
         },
      },
      "& a.active li": {
         color: theme.pallette.main,
         "&:before": {
            display: "block",
         },
      },
      "@media (max-width: 1050px)": {
         width: "100vw",
         height: 60,
         top: "auto",
         zIndex: 500,
         bottom: 0,
         display: "flex",
         justifyContent: "center",
         padding: 0,

         "& a.active li": {
            color: theme.pallette.grayDark,
            "&:before": {
               display: "none",
            },
         },

         "& ul": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0,

            "& a": {
               "& li":{
                  padding: "10px 25px",
                  width: 25,
                  margin: "0 5px",
                  "&:hover": {
                     color: theme.pallette.main,
                     "&:before": {
                        display: "none",
                     },
                  }
               }
            },
         }
      },
   },
}
