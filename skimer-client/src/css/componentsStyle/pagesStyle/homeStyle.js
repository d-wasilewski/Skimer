import theme from "../../theme"

export default {
   home: {
      display: "grid",
      gridTemplateColumns: "33% 66%",
      columnGap: 15,
      margin: 100,
      marginTop: 200,
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
            display: "grid",
            gridTemplateColumns: "1fr 30px",

            "& button": {
               border: "none",
               outline: "none",
               background: "none",
               padding: "none",

               "& svg, i": {
                  alignSelf: "center",
                  cursor: "pointer",
                  color: "#fff",
               },
            },
         },
         "& .noEvents": {
            padding: 16,
         },
      },

      "@media (max-width: 1050px)": {
         margin: 10,
         marginTop: 200,
         marginBottom: 100
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
   spinner: {
      height: "100vh",
      width: "100wh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 345,
      fontSize: 80,
      "@media (max-width: 1050px)": {
         marginRight: 50,
      },
   },
}
