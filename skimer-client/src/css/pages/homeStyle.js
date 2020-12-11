import theme from "../theme"

export default {
   home: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      columnGap: 15,
      width: "calc(100% - 560px)",
      margin: 100,
      marginRight: 445,

      minHeight: 500,
      "& > div": {
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
   },
}
