import theme from "../../theme"

export default {
   subject: {
      display: "grid",
      gridTemplateColumns: "33% 66%",
      columnGap: 15,
      margin: 100,
      marginRight: 445,
      "& .info, .hours, .notes": {
         background: "#fff",
         padding: 0,
         boxShadow: theme.shadows.medium,
         "& h3": {
            width: "100%",
            background: theme.gradients.navyBlue,
            color: "#fff",
            margin: 0,
            padding: 15,
            boxSizing: "border-box",
         },
      },
      "& .leader": {
         margin: "3px 2px",
         display: "grid",
         background: theme.pallette.grayLight,
         gridTemplateColumns: "85px 1fr",
         "& .name": {
            display: "grid",
            gridTemplateColumns: "1fr",
            "& h5": {
               fontSize: 16,
               fontWeight: 500,
               margin: 0,
               alignSelf: "end",
            },
            "& span": {
               color: theme.pallette.grayDarker,
               fontSize: 13,
            },
         },
      },
      "& .info": {
         marginBottom: 50,
      },
      "@media (max-width: 1050px)": {
         marginRight: 50,
      },
      "@media (max-width: 800px)": {
         gridTemplateColumns: "40% 60%",
      },
      "@media (max-width: 680px)": {
         gridTemplateColumns: "100%",
         gridTemplateRows: "auto auto",
         rowGap: "15px",
      },
   },
}
