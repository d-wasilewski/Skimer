import theme from "../theme.js"
import wave from "../../images/userWaveBg.svg"

export default {
   rightPanel: {
      width: 380,
      height: "100vh",
      padding: "0 15px",
      position: "fixed",
      right: 0,
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "350px 1fr 1fr",
      zIndex: 1000,
      background: `white url('${wave}')`,
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",

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
         height: "100%",
         display: "grid",
         gridTemplateColumns: "1fr 120px",
         columnGap: 15,

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
            color: "white",
            visibility: "hidden",

            "@media (max-width: 960px)": {
               visibility: "visible",
            },

            "&:hover": {
               background: theme.pallette.gray,
               color: theme.pallette.main,
            },
         },

         "& .name": {
            textAlign: "right",
            marginRight: 20,
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
      }, // .userbox
   },
}
