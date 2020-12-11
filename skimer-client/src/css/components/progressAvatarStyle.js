import theme from "../theme"

let borderCustomColor =
   theme.pallette.main +
   " " +
   theme.pallette.main +
   " " +
   theme.pallette.main +
   " "

export default {
   progressAvatar: {
      position: "relative",
      "& img": {
         width: 86,
         height: 86,
         borderRadius: "50%",
      },
      "& svg": {
         position: "absolute",
         width: 150,
         height: 150,
         transform: "rotateY(180deg) rotate(-90deg) scale(0.75)",
         left: -32,
         top: -32,

         "& circle": {
            width: "100%",
            height: "100%",
            fill: "none",
            stroke: theme.pallette.gray,
            strokeWidth: 8,
            strokeLinecap: "round",
            transform: "translate(5px, 5px)",

            "&:nth-child(2)": {
               strokeDasharray: 440,
               stroke: theme.pallette.main,
            },
         },
      },
      "& h5": {
         position: "absolute",
         textAlign: "center",
         width: 90,
         left: -67,
         top: 105,
      },
   },
}
