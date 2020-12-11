import theme from "../theme.js"

export default {
   sidebar: {
      width: 70,
      background: "white",
      height: "100vh",
      position: "fixed",
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "60px auto",
      padding: "26px 0px",

      "& .logo": {
         color: theme.pallette.main,
         fontSize: 32,
         textAlign: "center",
      },

      "& ul": {
         listStyleType: "none",
         textAlign: "center",
         color: theme.pallette.grayDark,
         fontSize: 28,
         padding: 0,
         marginTop: 80,

         "& li": {
            padding: "10px 0",
            height: 40,
            position: "relative",

            "&:hover": {
               background: theme.pallette.gray,
               cursor: "pointer",
               color: theme.pallette.main,
               "&:before": {
                  display: "block",
               },
            },
            "&.active": {
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
   },
}
