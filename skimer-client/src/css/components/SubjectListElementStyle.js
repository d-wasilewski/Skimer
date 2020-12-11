import theme from "../theme"

export default {
   SubjectListElement: {
      padding: "15px 15px",
      margin: "6px 0",
      position: "relative",
      transition: "all 0.2s ease-in-out",
      cursor: "pointer",

      "& h4": {
         fontWeight: "normal",
         margin: 0,
      },
      "&:before": {
         content: "''",
         height: 50,
         width: 2,
         position: "absolute",
         left: 0,
         top: 0,
         background: theme.pallette.main,
         transition: "all 0.2s ease-in-out",
      },
      "&:hover": {
         "&:before": {
            width: 10,
         },
         paddingLeft: 23,
      },
      "&:after": {
         content: "''",
         width: "100%",
         height: 2,
         position: "absolute",
         top: 53,
         left: 0,
         background: theme.pallette.grayLight,
      },
      "&:last-of-type:after": {
         display: "none",
      },
   },
}
