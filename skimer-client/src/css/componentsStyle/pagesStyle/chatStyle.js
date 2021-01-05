import theme from "../../theme"

export default {
   chat: {
      display: "grid",
      gridTemplateColumns: "33% 66%",
      columnGap: 15,
      margin: 100,
      marginRight: 445,
      "& .subjects,  .notes": {
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