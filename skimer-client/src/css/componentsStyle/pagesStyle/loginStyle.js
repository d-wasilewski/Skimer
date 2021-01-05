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
         width: 350,
         minHeight: 390,
         display: "flex",
         justifyContent: "flex-start",
         alignItems: "center",
         flexDirection: "column",
         borderRadius: 10,
         boxShadow: theme.shadows.medium,
         "& .login-header": {
            display: "flex",
            height: 140,
            width: 350,
            // backgroundColor: "red",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            boxSizing: "border-box",
            "& span": {
               color: theme.pallette.main,
               fontSize: 60,
               marginTop: 24,
            },
            "& img": {
               margin: "16px 8px 0 8px",
               transform: "scale(0.8)",
            },
         },
         "& .login-zalogujsie": {
            fontSize: 28,
            height: 44,
            fontWeight: "bold",
         },
         "& form": {
            position: "relative",
            "& .form": {
               height: 50,
               width: 230,
               position: "relative",
               overflow: "hidden",
               margin: 10,
               "& input": {
                  width: "100%",
                  height: "100%",
                  // color: theme.pallette.main,
                  color: "black",
                  border: "none",
                  paddingTop: "20px",
                  boxSizing: "border-box",
                  outline: "none",
                  backgroundColor: "transparent",
               },
               "& label": {
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  borderBottom: "1px solid black",
                  boxSizing: "border-box",
                  "&:after": {
                     display: "block",
                     content: "''",
                     position: "absolute",
                     height: "100%",
                     width: "100%",
                     borderBottom: `3px solid ${theme.pallette.main}`,
                     left: 0,
                     bottom: "-1px",
                     transform: "translateX(-100%)",
                     transition: "transform 0.3s ease",
                     boxSizing: "border-box",
                  },
                  "& .content-name": {
                     position: "absolute",
                     bottom: 5,
                     left: 0,
                     transition: "all 0.3s ease",
                     boxSizing: "border-box",
                  },
               },
               "& input:focus + .label-name .content-name, & input:valid + .label-name .content-name": {
                  transform: "translateY(-120%)",
                  fontSize: "14px",
                  color: theme.pallette.main,
               },
               "& input:focus + .label-name::after , & input:valid + .label-name::after": {
                  transform: "translateX(0%)",
               },
            },
            "& button": {
               display: "block",
               margin: "0 auto",
               marginTop: 18,
            },
         },
      },
   },
}