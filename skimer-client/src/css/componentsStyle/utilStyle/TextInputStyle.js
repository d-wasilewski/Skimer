import theme from "../../theme"

export default {
   input: {
      height: 50,
      width: 270,
      position: "relative",
      overflow: "hidden",

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
}
