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

         "@media (max-width: 600px)": {
            width: 400,
         },

         "& .login-header": {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            boxSizing: "border-box",
            marginTop: 30,
            marginRight: 24,
            "& span": {
               color: theme.pallette.main,
               fontSize: 60,
               marginTop: 24,
               fontWeight: "bold",
            },
            "& img": {
               margin: "16px 8px 0 8px",
               width: 100,
               height: 100,
               // transform: "scale(0.3)",
            },
         },
         "& .login-zalogujsie": {
            fontSize: 28,
            height: 44,
            marginTop: 16,
            marginBottom: 8,
            // fontWeight: "bold",
         },
         "& form": {
            position: "relative",
            "& .form": {
               height: 50,
               width: 270,
               position: "relative",
               overflow: "hidden",
               margin: 10,
               "&.error": {
                  "& label:after": {
                     borderBottom: "3px solid red",
                  },
                  "& input:focus + .label-name .content-name, & input:valid + .label-name .content-name": {
                     color: "red",
                  },
               },
               "& input": {
                  width: "100%",
                  height: "100%",
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
