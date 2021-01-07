import theme from "../../theme"

import loginBgSm from "../../../images/loginBgSm.svg"
import loginBgLg from "../../../images/loginBgLg.svg"

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
         width: 450,
         // minHeight: 510,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         flexDirection: "column",
         borderRadius: 10,
         boxShadow: theme.shadows.medium,
         "& .login-header": {
            display: "flex",
            // height: 140,
            width: 350,
            // backgroundColor: "red",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            boxSizing: "border-box",
            marginTop: 30,
            "& span": {
               color: theme.pallette.main,
               fontSize: 60,
               marginTop: 24,
               fontWeight: "bold",
            },
            "& img": {
               margin: "16px 8px 0 8px",
               transform: "scale(0.8)",
            },
         },
         "& .login-zalogujsie": {
            fontSize: 28,
            height: 44,
            // fontWeight: "bold",
         },
         "& form": {
            position: "relative",
            "& .emptyError": {
               height: 16,
               // backgroundColor: "red",
               color: "red",
               fontSize: 14,
               textAlign: "center",
               marginTop: 2,
            },
            "& button": {
               display: "block",
               margin: "0 auto",
               marginTop: 38,
               marginBottom: 50,
            },
            "& .wrongError": {
               height: 16,
               color: "red",
               fontSize: 16,
               textAlign: "center",
               marginTop: 4,
            },
         },
      },
   },
}
