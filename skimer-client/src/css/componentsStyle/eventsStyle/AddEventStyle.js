import theme from "../../theme"

export default {
   addEvent: {
      "& .bg": {
         backgroundColor: "rgb(0,0,0, 0.4)",
         width: "100vw",
         height: "100vh",
         zIndex: 1999,
         position: "absolute",
         top: 0,
         left: 0,
         border: "none",
         outline: "none",
      },
      "& .modalBody": {
         position: "fixed",
         width: 500,
         background: "#fff",
         boxShadow: theme.shadows.medium,
         top: "350px",
         left: "50%",
         transform: "translate(-50%, -50%)",
         zIndex: 2000,
         padding: 0,

         "& h3": {
            width: "100%",
            background: theme.gradients.navyBlue,
            color: "#fff",
            margin: 0,
            padding: 15,
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "1fr 30px",
         },
         "& form": {
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: "16px",
            width: "270px",
            margin: "40px auto",

            "& input[type='date'], & select": {
               border: "none",
               height: 40,
               borderBottom: `${theme.pallette.main} 2px solid `,
               outline: "none",
               "&:focus": {
                  borderBottom: `${theme.pallette.main} 2px solid `,
                  outline: "none",
               },
            },
            "& button": {
               marginTop: 35,
            },
         },
      },
   },
}
