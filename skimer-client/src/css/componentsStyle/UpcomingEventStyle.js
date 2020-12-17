import theme from "../theme"

export default {
   UpcomingEvent: {
      height: 90,
      padding: 0,
      margin: "3px 2px",
      background: theme.pallette.grayLight,
      display: "grid",
      gridTemplateColumns: "100px 1fr 1.3fr auto",
      gridTemplateRows: "90px",
      justifyContent: "left",
      alignItems: "center",

      "& .date": {
         display: "grid",
         gridTemplateColumns: "1fr",
         textAlign: "center",
         alignItems: "center",

         "& span:nth-child(1)": {
            fontSize: 30,
            fontWeight: 500,
            color: theme.pallette.main,
         },
         "& span:nth-child(2)": {
            fontSize: 17,
            color: theme.pallette.grayDarker,
         },
      },
      "& .subject": {
         display: "grid",
         gridTemplateRows: "45px 45px",
         gridTemplateColumns: "1fr",

         "& h5": {
            fontSize: 16,
            fontWeight: 500,
         },
         "& span": {
            color: theme.pallette.grayDarker,
            fontSize: 13,
         },
      },
      "& .author": {
         display: "grid",
         gridTemplateColumns: "90px 1fr",
         gridTemplateRows: "45px 45px",
         "& div": {
            gridRow: "1 / 3",
            marginTop: 2,
         },
         "& h5": {
            fontSize: 16,
            fontWeight: 500,
         },
         "& span": {
            color: theme.pallette.grayDarker,
            fontSize: 13,
         },
      },
      "& .icons": {
         display: "grid",
         gridTemplateColumns: "1fr 1fr",
         gridTemplateRows: "90px",
         justifyContent: "center",
         alignItems: "center",
         fontSize: 19,
         margin: "0 10px",
         boxSizing: "border-box",
         "& svg": {
            background: theme.gradients.navyBlue,
            color: "white",
            padding: 11,
            margin: 10,
            borderRadius: "50%",
         },
      },
   },
}
