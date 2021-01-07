import theme from "../../theme"

export default {
   UpcomingEvent: {
      height: 90,
      padding: 0,
      margin: "3px 2px",
      background: theme.pallette.grayLight,
      display: "grid",
      gridTemplateColumns: "100px 1fr 80px 1.3fr auto",
      gridTemplateRows: "90px",
      justifyContent: "left",
      alignItems: "center",
      textOverflow: "ellipsis",

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
         gridTemplateColumns: "1fr",

         "& h5": {
            fontSize: 16,
            fontWeight: 500,
            margin: 0,
         },
         "& span": {
            color: theme.pallette.grayDarker,
            fontSize: 13,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
         },
      },
      "& .avatar": {},
      "& .author": {
         display: "grid",
         gridTemplateColumns: "1fr",
         "& h5": {
            fontSize: 16,
            fontWeight: 500,
            margin: 0,
         },
         "& span": {
            color: theme.pallette.grayDarker,
            fontSize: 13,
         },
      },
      "& .icons": {
         // display: "grid",
         // gridTemplateColumns: "1fr 1fr",
         // gridTemplateRows: "90px",
         // justifyContent: "center",
         display: "flex",
         justifyContent: "flex-end",
         alignItems: "center",
         fontSize: 19,
         width: 122,
         margin: "0 10px",
         boxSizing: "border-box",
         "& div": {
            border: "none",
            outline: "none",
         },
         "& svg, i": {
            background: theme.gradients.navyBlue,
            color: "white",
            padding: 11,
            margin: 10,
            borderRadius: "50%",
            cursor: "pointer",
            width: 19,
         },
         "&  .fa-check": {
            background: theme.gradients.gray,
         },
         "&.finished  .fa-check": {
            background: theme.gradients.navyBlue,
         },
      },
      "@media (max-width: 1400px)": {
         height: 180,
         gridTemplateColumns: "100px 1fr 150px",
         gridTemplateRows: "90px 90px",

         "& .subject": {
            gridColumn: "2 / 4",
         },
      },
      "@media (max-width: 1200px)": {
         height: 235,
         gridTemplateColumns: "85px 1fr 150px",
         gridTemplateRows: "90px 90px 45px",

         "& .subject": {
            gridColumn: "2 / 4",
         },

         "& .author": {
            gridColumn: "2 / 4",
         },
         "& .icons": {
            gridColumn: "1 / 4",
            justifyContent: "center",
         },
      },
   },
}
