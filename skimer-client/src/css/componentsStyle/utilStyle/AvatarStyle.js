export default {
   Avatar: {
      width: 86,
      height: 86,
      margin: 0,
      borderRadius: "50%",
      backgroundColor: "#267fc8",
      color: "white",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "scale(1)",
      border: "none",
      outline: "none",

      "& .initials": {
         textAlign: "center",
         textTransform: "capitalize",
         fontSize: 28,
      },

      "& img": {
         width: 86,
         height: 86,
         borderRadius: "50%",
         position: "absolute",
         top: 0,
         left: 0,
      },
   },
}
