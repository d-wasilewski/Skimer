import theme from "../theme.js"

export default {
   navbar: {
      width: "calc(100% - 90px - 455px)",
      height: 95,
      background: "white",
      paddingLeft: 90,
      paddingRight: 455,
      display: "grid",
      gridTemplateColumns: "60px 1fr",
      alignItems: "center",

      "@media (max-width: 960px)": {
         width: "calc(100% - 130px)",
         paddingRight: 130,
      },

      "& h2": {
         margin: 0,
         padding: 0,
      },

      "& ul": {
         listStyleType: "none",
         justifySelf: "end",
         display: "flex",
         flexDirection: "row",
         fontSize: 22,

         "& a": {
            textDecoration: "none",
            color: "black",
         },

         "& #menuButton": {
            display: "none",
            order: "-1",
            "@media (max-width: 960px)": {
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

            "&:hover": {
               background: theme.pallette.gray,
            },
         },
      },
   },
}
