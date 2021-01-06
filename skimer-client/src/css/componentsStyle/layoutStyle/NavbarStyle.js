import theme from "../../theme.js"

export default {
   navbar: {
      width: "calc(100% - 455px - 23px)",
      height: 95,
      paddingRight: 455,
      paddingLeft: 23,
      display: "grid",
      gridTemplateColumns: "80px auto 1fr",
      alignItems: "center",
      zIndex: 900,
      background: theme.gradients.blueCyan,
      position: "fixed",
      top: 0,

      "@media (max-width: 1050px)": {
         width: "calc(100% - 130px - 23px)",
         paddingRight: 130,
      },

      "& .logo": {
         width: 50,
      },

      "& h2": {
         margin: 0,
         padding: 0,
         color: "#fff",
      },

      "& ul": {
         listStyleType: "none",
         justifySelf: "end",
         display: "flex",
         flexDirection: "row",
         fontSize: 22,

         "& a": {
            textDecoration: "none",
         },

         "& #menuButton": {
            display: "none",
            order: "-1",
            "@media (max-width: 1050px)": {
               display: "block",
               order: 2,
            },
         },

         "& li": {
            borderRadius: "50%",
            padding: 10,
            marginLeft: 15,
            width: 30,
            textAlign: "center",
            cursor: "pointer",
            color: "#fff",

            "&:hover": {
               background: theme.pallette.gray,
               "& svg, i": {
                  color: theme.pallette.main,
               },
            },
         },
      },
   },
}
