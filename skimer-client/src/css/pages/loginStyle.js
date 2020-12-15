import theme from "../theme"

import loginBgSm from "../../images/loginBgSm.svg"
import loginBgLg from "../../images/loginBgLg.svg"

export default {
   login: {
      width: "100vw",
      height: "100vh",
      background: `white url('${loginBgLg}') no-repeat center center`,
      backgroundSize: "cover",
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "@media(max-width: 600px)": {
         background: `white url('${loginBgSm}') no-repeat center center`,
         backgroundSize: "cover",
      },
      "& > .container": {
         backgroundColor: theme.pallette.grayLighter,
         width: 350,
         minHeight: 400,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         flexDirection: "column",
         borderRadius: 10,
         boxShadow: theme.shadows.medium,
      },
   },
}
